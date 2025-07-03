import { TrainerRequest } from '@sacd/core/http/requests';
import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { PersonClubDto } from '../../person-club/models/person-club.dto';
import { EmergencyContactDto } from './emergency-contact.dto';

export class TrainerDto implements TrainerRequest {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => PersonClubDto)
  personaClub: PersonClubDto;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => EmergencyContactDto)
  contactosEmergencia: EmergencyContactDto;
}
