import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export abstract class DataTableApi<T extends object> {
  protected readonly http = inject(HttpClient);

  abstract getData(): Observable<T[]>;
}
