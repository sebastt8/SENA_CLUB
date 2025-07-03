import { PersonClubRequest } from '@sacd/core/http/requests';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class PersonClubDto implements PersonClubRequest {
  @IsNotEmpty()
  @IsString()
  tipoDocumento: string;

  @IsNotEmpty()
  numeroDocumento: string;

  @IsNotEmpty()
  @IsNumber()
  idMunicipio: number;

  @IsNotEmpty()
  @IsString()
  nombres: string;

  @IsNotEmpty()
  @IsString()
  apellidos: string;

  @IsNotEmpty()
  @IsDateString()
  fechaNacimento: string;

  @IsNotEmpty()
  @IsString()
  tipoRh: string;

  @IsNotEmpty()
  @IsNumber()
  peso: number;

  @IsNotEmpty()
  @IsNumber()
  altura: number;

  @IsNotEmpty()
  @IsString()
  correo: string;

  @IsNotEmpty()
  @IsString()
  numeroTelefono: string;

  @IsNotEmpty()
  @IsString()
  tallaCamisa: string;

  @IsNotEmpty()
  @IsString()
  tallaCalzado: string;

  @IsNotEmpty()
  @IsString()
  tallaPantaloneta: string;

  @IsNotEmpty()
  @IsString()
  genero: string;

  @IsString()
  @IsOptional()
  direccion?: string | undefined;
}
