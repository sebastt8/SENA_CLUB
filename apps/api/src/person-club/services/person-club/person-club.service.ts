import { DatabaseService, PersonaClub } from '@api/database';
import { Injectable } from '@nestjs/common';
import { PersonClubRequest } from '@sacd/core/http/requests';

@Injectable()
export class PersonClubService {
  constructor(private readonly _db: DatabaseService) {}

  public create(person: PersonClubRequest): Promise<PersonaClub> {
    return this._db.personaClub.create({
      data: { ...person, fechaNacimento: new Date(person.fechaNacimento) },
    });
  }

  public update(id: number, person: PersonClubRequest): Promise<PersonaClub> {
    return this._db.personaClub.update({
      where: { id },
      data: {
        ...person,
        fechaNacimento: new Date(person.fechaNacimento),
      },
    });
  }
}
