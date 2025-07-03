import { DatabaseModule } from '@api/database';
import { Module } from '@nestjs/common';
import { PersonClubService } from './services/person-club/person-club.service';

@Module({
  imports: [DatabaseModule],
  providers: [PersonClubService],
  exports: [PersonClubService],
})
export class PersonClubModule {}
