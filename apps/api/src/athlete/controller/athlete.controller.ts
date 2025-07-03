import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { AthleteDto } from '../models/athlete.dto';
import { DeleteAthleteDto } from '../models/delete-athlete.dto';
import { AthleteService } from '../services/athlete/athlete.service';

@Controller('athlete')
export class AthleteController {
  constructor(private readonly athleteService: AthleteService) {}

  @Get()
  async findAll() {
    return this.athleteService.getAthletes();
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.athleteService.getAthleteById(id);
  }

  @Post()
  create(@Body() athlete: AthleteDto) {
    return this.athleteService.createAthlete(athlete);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() athlete: AthleteDto) {
    return this.athleteService.updateAthlete(id, athlete);
  }

  @Delete()
  delete(@Body() request: DeleteAthleteDto) {
    return this.athleteService.deleteAthlete(request);
  }
}
