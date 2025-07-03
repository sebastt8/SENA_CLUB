import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import {
  DepartamentoResponse,
  MunicipioResponse,
} from '@sacd/core/http/responses';
import { LocationsService } from '../service/locations.service';

@Controller('locations')
export class LocationsController {
  constructor(private readonly _locationsService: LocationsService) {}

  @Get('departamentos')
  async getDepartamentos(): Promise<DepartamentoResponse[]> {
    return this._locationsService.getDepartamentos();
  }

  @Get('municipios/:idDepartamento')
  async getMunicipios(
    @Param('idDepartamento', ParseIntPipe) idDepartamento: number
  ): Promise<MunicipioResponse[]> {
    return this._locationsService.getMunicipios(idDepartamento);
  }
}
