import { IsNotEmpty, IsString } from 'class-validator';
import { TutorRequest } from '@sacd/core/http/requests';

export class TutorDto implements TutorRequest {
  @IsString()
  @IsNotEmpty()
  tipoDocumento: string;

  @IsString()
  @IsNotEmpty()
  numeroDocumento: string;

  @IsString()
  @IsNotEmpty()
  nombres: string;

  @IsString()
  @IsNotEmpty()
  apellidos: string;

  @IsString()
  @IsNotEmpty()
  correo: string;

  @IsString()
  @IsNotEmpty()
  telefono: string;
}
