import { EmergencyContactResponse } from './emergency-contact.response';
import { PersonClubResponse } from './persona-club.response';

export interface TrainerResponse {
  id: number;
  personaClub: PersonClubResponse;
  emergencyContact: EmergencyContactResponse;
  activo: boolean;
  fechaIngreso: Date;
}
