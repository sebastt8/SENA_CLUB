import { Module } from '@nestjs/common';

import { DatabaseModule } from '@api/database';
import { LocationsService } from '../locations/service/locations.service';
import { PersonClubModule } from '../person-club/person-club.module';
import { TrainerController } from './controller/trainer/trainer.controller';
import { TrainerService } from './services/trainer/trainer.service';

@Module({
  imports: [PersonClubModule, DatabaseModule],
  providers: [TrainerService, LocationsService],
  controllers: [TrainerController],
})
export class TrainerModule {}
