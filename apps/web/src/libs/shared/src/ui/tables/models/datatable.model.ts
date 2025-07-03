import { Signal } from '@angular/core';

export type DataTable = {
  isLoading: boolean;
  filters: { query: string };
  pagination: { page: number; pageSize: number };
};

export type DataTablePaginator = {
  length: Signal<number>;
  pagination: Signal<{ page: number; pageSize: number }>;
  nextPage: () => void;
  previousPage: () => void;
  setPageSize: (pageSize: number) => void;
};

export type DataTableSearch = {
  setQuery: (query: string) => void;
};
