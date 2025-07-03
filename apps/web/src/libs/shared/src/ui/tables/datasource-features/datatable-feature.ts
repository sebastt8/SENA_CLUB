import { computed } from '@angular/core';
import {
  patchState,
  signalStoreFeature,
  type,
  withComputed,
  withMethods,
} from '@ngrx/signals';
import { EntityProps, EntityState } from '@ngrx/signals/entities';
import { DataTable } from '../models/datatable.model';

export function withDataTableFeature<TEntity extends object>() {
  return signalStoreFeature(
    {
      state: { ...type<EntityState<TEntity>>(), ...type<DataTable>() },
      props: type<EntityProps<TEntity>>(),
    },
    withComputed(({ filters, entities, pagination }) => ({
      length: computed(() => entities().length),
      data: computed(() => {
        const filterData = () =>
          entities().filter((entity) =>
            Reflect.ownKeys(entity).some((key) =>
              String(Reflect.get(entity, key)).includes(filters().query)
            )
          );

        const dataFiltered = filters().query.trim() ? filterData() : entities();

        const { page, pageSize } = pagination();
        const startIndex = page * pageSize;
        const endIndex = startIndex + pageSize;

        return dataFiltered.slice(startIndex, endIndex);
      }),
    })),
    withMethods((store) => ({
      nextPage(): void {
        patchState(store, ({ pagination }) => ({
          pagination: { ...pagination, page: pagination.page + 1 },
        }));
      },
      previousPage(): void {
        patchState(store, ({ pagination }) => {
          const previousPage = pagination.page - 1;
          const page = previousPage < 0 ? 0 : previousPage;
          return { pagination: { ...pagination, page } };
        });
      },
      setQuery(query: string): void {
        patchState(store, { filters: { query } });
      },
      resetPage(): void {
        patchState(store, ({ pagination }) => ({
          pagination: { ...pagination, page: 0 },
        }));
      },
      setPageSize(pageSize: number): void {
        patchState(store, (state) => ({
          pagination: { ...state.pagination, pageSize, page: 0 },
        }));
      },
    }))
  );
}
