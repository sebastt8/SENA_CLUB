import { inject } from '@angular/core';
import {
  patchState,
  signalStoreFeature,
  type,
  withMethods,
} from '@ngrx/signals';
import { EntityState, setAllEntities } from '@ngrx/signals/entities';
import { firstValueFrom } from 'rxjs';
import { DataTableApi } from '../models/datatable-api.model';
import { DataTable } from '../models/datatable.model';

export function withDataTableEntity<TEntity extends object>(
  selectId: (entity: TEntity) => string | number
) {
  return signalStoreFeature(
    { state: { ...type<EntityState<TEntity>>(), ...type<DataTable>() } },
    withMethods((store, datatableApi = inject(DataTableApi)) => ({
      async loadData(): Promise<void> {
        patchState(store, { isLoading: true });
        const data = await firstValueFrom(datatableApi.getData());
        patchState(
          store,
          { isLoading: false },
          setAllEntities(data, { selectId })
        );
      },
    }))
  );
}
