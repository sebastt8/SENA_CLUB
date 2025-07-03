import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@sacd/core/environments';
import {
  DepartamentoResponse,
  MunicipioResponse,
} from '@sacd/core/http/responses';

@Injectable({
  providedIn: 'root',
})
export class LocationsApiService {
  private readonly _apiUrl = `${environment.apiUrl}/locations`;
  constructor(private http: HttpClient) {}

  getDepartamentos() {
    return this.http.get<DepartamentoResponse[]>(
      `${this._apiUrl}/departamentos`
    );
  }

  getMunicipios(idDepartamento: number) {
    return this.http.get<MunicipioResponse[]>(
      `${this._apiUrl}/municipios/${idDepartamento}`
    );
  }
}
