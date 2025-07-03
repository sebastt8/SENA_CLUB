import { DatabaseModule } from '@api/database';
import { Module } from '@nestjs/common';

import { LocationsService } from '../locations/service/locations.service';
import { PersonClubModule } from '../person-club/person-club.module';
import { AthleteController } from './controller/athlete.controller';
import { AthleteService } from './services/athlete/athlete.service';

@Module({
  imports: [DatabaseModule, PersonClubModule],
  providers: [AthleteService, LocationsService],
  exports: [AthleteService],
  controllers: [AthleteController],
})
export class AthleteModule {}
