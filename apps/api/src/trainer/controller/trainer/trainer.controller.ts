import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { TrainerResponse } from '@sacd/core/http/responses';
import { TrainerDto } from '../../models/trainer.dto';
import { TrainerService } from '../../services/trainer/trainer.service';

@Controller('trainer')
export class TrainerController {
  constructor(private readonly _trainerService: TrainerService) {}

  @Get()
  async findAll(): Promise<TrainerResponse[]> {
    return this._trainerService.getTrainers();
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return this._trainerService.getTrainerById(id);
  }

  @Post()
  async create(@Body() trainer: TrainerDto) {
    return this._trainerService.createTrainer(trainer);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() trainer: TrainerDto
  ) {
    return this._trainerService.updateTrainer(id, trainer);
  }
}
