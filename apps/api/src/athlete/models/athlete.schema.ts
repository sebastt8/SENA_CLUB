import { PersonaClub, Tutor } from '@api/database';

export interface AthleteSchema {
  id: number;
  personaClub: PersonaClub;
  tutor: Tutor;
  activo: boolean;
  categoria: string;
}
