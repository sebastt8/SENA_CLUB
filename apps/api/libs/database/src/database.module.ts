import { Module } from '@nestjs/common';
import { DatabaseService } from './connection/database.service';

@Module({
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
