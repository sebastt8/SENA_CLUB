import { PersonClubRequest } from './persona-club.request';
import { TutorRequest } from './tutor.request';

export interface AthleteRequest {
  personaClub: PersonClubRequest;
  tutor: TutorRequest;
}
