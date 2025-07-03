import { AthleteRequest } from '@sacd/core/http/requests';
import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { PersonClubDto } from '../../person-club/models/person-club.dto';
import { TutorDto } from './tutor.dto';

export class AthleteDto implements AthleteRequest {
  @IsNotEmpty({ message: 'personaClub no debe estar vacío' })
  @ValidateNested()
  @Type(() => PersonClubDto)
  personaClub: PersonClubDto;

  @IsNotEmpty({ message: 'tutor no debe estar vacío' })
  @ValidateNested()
  @Type(() => TutorDto)
  tutor: TutorDto;
}