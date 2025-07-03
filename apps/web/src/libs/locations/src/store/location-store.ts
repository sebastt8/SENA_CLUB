import { inject } from '@angular/core';
import {
  patchState,
  signalStore,
  type,
  withComputed,
  withHooks,
  withMethods,
  withProps,
} from '@ngrx/signals';
import {
  entityConfig,
  setAllEntities,
  upsertEntities,
  withEntities,
} from '@ngrx/signals/entities';
import {
  DepartamentoResponse,
  MunicipioResponse,
} from '@sacd/core/http/responses';
import { firstValueFrom } from 'rxjs';
import { LocationsApiService } from '../services/locations-api.service';

const departamentoConfig = entityConfig({
  entity: type<DepartamentoResponse>(),
  collection: '_departamentos',
  selectId: (departamento) => departamento.id,
});

const municipioConfig = entityConfig({
  entity: type<MunicipioResponse>(),
  collection: '_municipios',
  selectId: (municipio) => municipio.id,
});

export const LocationStore = signalStore(
  { providedIn: 'root' },
  withEntities(departamentoConfig),
  withEntities(municipioConfig),
  withComputed(({ _departamentosEntities, _municipiosEntities }) => ({
    departamentos: _departamentosEntities,
    municipios: _municipiosEntities,
  })),
  withProps(() => ({
    locationsApi: inject(LocationsApiService),
  })),
  withMethods(({ locationsApi, ...store }) => ({
    async _getDepartamentos() {
      const departamentos = await firstValueFrom(
        locationsApi.getDepartamentos()
      );

      patchState(store, setAllEntities(departamentos, departamentoConfig));
    },
    async getMunicipios(idDepartamento: number) {
      const hasMunicipios = store
        .municipios()
        .find((municipio) => municipio.idDepartamento === idDepartamento);

      if (hasMunicipios) return;

      const municipios = await firstValueFrom(
        locationsApi.getMunicipios(idDepartamento)
      );

      patchState(store, upsertEntities(municipios, municipioConfig));
    },
  })),
  withHooks({
    async onInit({ _getDepartamentos }) {
      await _getDepartamentos();
    },
  })
);
