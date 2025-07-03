import { DatabaseService } from '@api/database';
import { Injectable, NotFoundException } from '@nestjs/common';
import { AthleteResponse } from '@sacd/core/http/responses';
import { AthleteDto } from '../../models/athlete.dto';
import { AthleteSchema } from '../../models/athlete.schema';

import { DeleteAthleteRequest } from '@sacd/core/http/requests';
import { CategoriesGenerator } from '@sacd/core/models';
import { LocationsService } from '../../../locations/service/locations.service';
import { PersonClubService } from '../../../person-club/services/person-club/person-club.service';

@Injectable()
export class AthleteService {
  constructor(
    private readonly _db: DatabaseService,
    private readonly _locationsService: LocationsService,
    private readonly _personClubService: PersonClubService
  ) {}

  public async getAthletes(): Promise<AthleteResponse[]> {
    const athletes = await this._db.deportista.findMany({
      include: { personaClub: true, tutor: true },
    });

    const response: AthleteResponse[] = await Promise.all(
      athletes.map((athlete) => this.mapAthleteToResponse(athlete))
    );

    return response;
  }

  public async getAthleteById(id: number): Promise<AthleteResponse> {
    const athlete = await this._db.deportista.findUnique({
      where: { id },
      include: { personaClub: true, tutor: true },
    });

    if (!athlete) throw new NotFoundException('Deportista no encontrado');

    return this.mapAthleteToResponse(athlete);
  }

  public async createAthlete(athlete: AthleteDto): Promise<AthleteResponse> {
    try {
      const [createdPersonClub, createdTutor] = await Promise.all([
        this._personClubService.create(athlete.personaClub),
        this._db.tutor.create({ data: { ...athlete.tutor } }),
      ]);

      const createdDeportista = await this._db.deportista.create({
        data: {
          idTutor: createdTutor.id,
          idPersonaClub: createdPersonClub.id,
          activo: true,
          categoria: CategoriesGenerator.getCategory(
            createdPersonClub.fechaNacimento
          ),
        },
      });

      return this.mapAthleteToResponse({
        ...createdDeportista,
        personaClub: createdPersonClub,
        tutor: createdTutor,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async updateAthlete(
    id: number,
    athlete: AthleteDto
  ): Promise<AthleteResponse> {
    try {
      const athleteDb = await this._db.deportista.findUnique({
        where: { id },
        include: { personaClub: true },
      });

      if (!athleteDb) throw new NotFoundException('Deportista no encontrado');

      const [updatedPersonClub, updatedTutor] = await Promise.all([
        this._personClubService.update(
          athleteDb.idPersonaClub,
          athlete.personaClub
        ),
        this._db.tutor.update({
          where: { id: athleteDb.idTutor },
          data: { ...athlete.tutor },
        }),
        this._db.deportista.update({
          where: { id },
          data: {
            categoria: CategoriesGenerator.getCategory(
              new Date(athlete.personaClub.fechaNacimento)
            ),
          },
        }),
      ]);

      return this.mapAthleteToResponse({
        id: athleteDb.id,
        activo: athleteDb.activo,
        categoria: athleteDb.categoria,
        personaClub: updatedPersonClub,
        tutor: updatedTutor,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async deleteAthlete(request: DeleteAthleteRequest): Promise<void> {
    const { id, reason, description } = request;

    await Promise.all([
      this._db.deportista.update({ where: { id }, data: { activo: false } }),
      this._db.desercionDeportista.create({
        data: {
          idDeportista: id,
          fechaDesercion: new Date(),
          razon: reason,
          descripcion: description,
        },
      }),
    ]);
  }

  private async mapAthleteToResponse(
    athlete: AthleteSchema
  ): Promise<AthleteResponse> {
    const departamento =
      await this._locationsService.getDepartamentoByMunicipio(
        athlete.personaClub.idMunicipio
      );

    return {
      id: athlete.id,
      activo: athlete.activo,
      categoria: athlete.categoria,
      personaClub: { ...athlete.personaClub, idDepartamento: departamento.id },
      tutor: athlete.tutor,
    };
  }
}
