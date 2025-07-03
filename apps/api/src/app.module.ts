import { Module } from '@nestjs/common';
import { AthleteModule } from './athlete/athlete.module';
import { LocationsModule } from './locations/locations.module';
import { TrainerModule } from './trainer/trainer.module';
@Module({
  imports: [AthleteModule, LocationsModule, TrainerModule],
  providers: [],
})
export class AppModule {}
