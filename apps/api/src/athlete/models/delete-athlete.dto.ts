import { DeleteAthleteRequest } from '@sacd/core/http/requests';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class DeleteAthleteDto implements DeleteAthleteRequest {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  reason: string;

  @IsString()
  @IsOptional()
  description?: string;
}
