import { PersonClubResponse } from './persona-club.response';
import { TutorResponse } from './tutor.response';

export interface AthleteResponse {
  id: number;
  personaClub: PersonClubResponse;
  tutor: TutorResponse;
  activo: boolean;
  categoria: string;
}
