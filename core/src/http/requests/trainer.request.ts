import { EmergencyContactRequest } from './emergency-contact.request';
import { PersonClubRequest } from './persona-club.request';

export interface TrainerRequest {
  personaClub: PersonClubRequest;
  contactosEmergencia: EmergencyContactRequest;
}
