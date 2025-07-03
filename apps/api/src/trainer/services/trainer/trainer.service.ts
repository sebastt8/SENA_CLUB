import { DatabaseService } from '@api/database';
import { Injectable, NotFoundException } from '@nestjs/common';
import { TrainerResponse } from '@sacd/core/http/responses';
import { LocationsService } from '../../../locations/service/locations.service';
import { PersonClubService } from '../../../person-club/services/person-club/person-club.service';
import { TrainerDto } from '../../models/trainer.dto';
import { TrainerSchema } from '../../models/trainer.schema';

@Injectable()
export class TrainerService {
  constructor(
    private readonly _db: DatabaseService,
    private readonly _locationsService: LocationsService,
    private readonly _personClubService: PersonClubService
  ) {}

  public async getTrainers(): Promise<TrainerResponse[]> {
    const trainers = await this._db.entrenador.findMany({
      include: { personaClub: true, contactosEmergencia: true },
    });

    const response: TrainerResponse[] = await Promise.all(
      trainers.map((trainer) => this.mapTrainerToResponse(trainer))
    );

    return response;
  }

  public async getTrainerById(id: number): Promise<TrainerResponse> {
    const trainer = await this._db.entrenador.findUnique({
      where: { id },
      include: { personaClub: true, contactosEmergencia: true },
    });

    return this.mapTrainerToResponse(trainer);
  }

  public async createTrainer(trainer: TrainerDto): Promise<TrainerResponse> {
    try {
      const [createdPersonClub, createdEmergencyContact] = await Promise.all([
        this._personClubService.create(trainer.personaClub),
        this._db.contactosEmergencia.create({
          data: { ...trainer.contactosEmergencia },
        }),
      ]);

      const createdTrainer = await this._db.entrenador.create({
        data: {
          idPersonaClub: createdPersonClub.id,
          idContactoEmergencia: createdEmergencyContact.id,
          fechaIngreso: new Date(),
          activo: true,
        },
      });

      return this.mapTrainerToResponse({
        ...createdTrainer,
        personaClub: createdPersonClub,
        contactosEmergencia: createdEmergencyContact,
      });
    } catch (error) {
      throw new Error('Error al crear el entrenador');
    }
  }

  public async updateTrainer(
    id: number,
    trainer: TrainerDto
  ): Promise<TrainerResponse> {
    try {
      const trainerDb = await this._db.entrenador.findUnique({
        where: { id },
        include: { personaClub: true },
      });

      if (!trainerDb) throw new NotFoundException('Entrenador no encontrado');

      const [updatedPersonClub, updatedEmergencyContact] = await Promise.all([
        this._personClubService.update(
          trainerDb.idPersonaClub,
          trainer.personaClub
        ),
        this._db.contactosEmergencia.update({
          where: { id: trainerDb.idContactoEmergencia },
          data: { ...trainer.contactosEmergencia },
        }),
      ]);

      return this.mapTrainerToResponse({
        ...trainerDb,
        personaClub: updatedPersonClub,
        contactosEmergencia: updatedEmergencyContact,
        fechaIngreso: trainerDb.fechaIngreso,
      });
    } catch (error) {
      throw new Error('Error al actualizar el entrenador');
    }
  }

  private async mapTrainerToResponse(
    trainer: TrainerSchema
  ): Promise<TrainerResponse> {
    const departamento =
      await this._locationsService.getDepartamentoByMunicipio(
        trainer.personaClub.idMunicipio
      );

    return {
      id: trainer.id,
      personaClub: { ...trainer.personaClub, idDepartamento: departamento.id },
      emergencyContact: trainer.contactosEmergencia,
      activo: trainer.activo,
      fechaIngreso: trainer.fechaIngreso,
    };
  }
}
