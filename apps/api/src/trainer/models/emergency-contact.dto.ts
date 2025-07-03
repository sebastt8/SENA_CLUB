import { EmergencyContactRequest } from '@sacd/core/http/requests';
import { IsString } from 'class-validator';
import { IsNotEmpty } from 'class-validator';

export class EmergencyContactDto implements EmergencyContactRequest {
  @IsNotEmpty()
  @IsString()
  tipoDocumento: string;

  @IsNotEmpty()
  @IsString()
  numeroDocumento: string;

  @IsNotEmpty()
  @IsString()
  nombres: string;

  @IsNotEmpty()
  @IsString()
  apellidos: string;

  @IsNotEmpty()
  @IsString()
  correo: string;

  @IsNotEmpty()
  @IsString()
  telefono: string;
}
