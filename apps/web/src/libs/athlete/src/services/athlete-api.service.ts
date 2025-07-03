import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@sacd/core/environments';
import { AthleteRequest, DeleteAthleteRequest } from '@sacd/core/http/requests';
import { AthleteResponse } from '@sacd/core/http/responses';
import { DataTableApi } from '@web/libs/shared/ui/tables';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AthleteApiService extends DataTableApi<AthleteResponse> {
  private readonly _apiUrl = `${environment.apiUrl}/athlete`;

  constructor(private readonly _http: HttpClient) {
    super();
  }

  public override getData(): Observable<AthleteResponse[]> {
    return this._http.get<AthleteResponse[]>(this._apiUrl);
  }

  public create(athlete: AthleteRequest): Observable<AthleteResponse> {
    return this._http.post<AthleteResponse>(this._apiUrl, athlete);
  }

  public getById(id: string): Observable<AthleteResponse> {
    return this._http.get<AthleteResponse>(`${this._apiUrl}/${id}`);
  }

  public update(id: string, athlete: AthleteRequest): Observable<AthleteResponse> {
    return this._http.put<AthleteResponse>(`${this._apiUrl}/${id}`, athlete);
  }

  public delete(request: DeleteAthleteRequest): Observable<void> {
    return this._http
      .delete<void>(`${this._apiUrl}`, { body: request })
      .pipe(delay(2000));
  }
}
