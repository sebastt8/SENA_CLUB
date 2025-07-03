import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@sacd/core/environments';
import { TrainerRequest } from '@sacd/core/http/requests';
import { TrainerResponse } from '@sacd/core/http/responses';
import { DataTableApi } from '@web/libs/shared/ui/tables';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrainerApiService extends DataTableApi<TrainerResponse> {
  private readonly _apiUrl = `${environment.apiUrl}/trainer`;

  constructor(private readonly _http: HttpClient) {
    super();
  }

  override getData(): Observable<TrainerResponse[]> {
    return this._http.get<TrainerResponse[]>(this._apiUrl);
  }

  public create(trainer: TrainerRequest): Observable<TrainerResponse> {
    return this._http.post<TrainerResponse>(this._apiUrl, trainer);
  }

  public getById(id: string): Observable<TrainerResponse> {
    return this._http.get<TrainerResponse>(`${this._apiUrl}/${id}`);
  }

  public update(
    id: string,
    trainer: TrainerRequest
  ): Observable<TrainerResponse> {
    return this._http.put<TrainerResponse>(`${this._apiUrl}/${id}`, trainer);
  }

  public delete(id: string): Observable<void> {
    return this._http.delete<void>(`${this._apiUrl}/${id}`);
  }
}
