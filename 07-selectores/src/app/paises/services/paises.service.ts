import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combineLatest, Observable, of } from 'rxjs';
import { PaiseSmall, Pais } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  private _baseUrl: string = 'https://restcountries.eu/rest/v2';

  get regiones(): string[] {
    return [...this._regiones];
  }

  constructor(
    private http: HttpClient
  ) { }

  getPaisesPorRegion(region: string): Observable<PaiseSmall[]> {
    const url = `${this._baseUrl}/region/${region}?fields=alpha3Code;name`;
    return this.http.get<PaiseSmall[]>(url);
  }

  getPaisPorAlpha3Code(codigo: string): Observable<Pais | null> {

    if (!codigo) {
      return of(null);
    }
    const url = `${this._baseUrl}/alpha/${codigo}`;
    return this.http.get<Pais>(url);
  }

  getPaisPorAlpha3CodeSmall(codigo: string): Observable<PaiseSmall> {

    const url = `${this._baseUrl}/alpha/${codigo}?fields=name;alpha3Code`;
    return this.http.get<PaiseSmall>(url);
  }

  getPaisesPorCodigos(borders: string[]): Observable<PaiseSmall[]> {
    if (!borders) {
      return of([]);
    }

    const peticiones: Observable<PaiseSmall>[] = [];

    borders.forEach(codigo => {
      const peticion = this.getPaisPorAlpha3CodeSmall(codigo);
      peticiones.push(peticion);
    });

    return combineLatest( peticiones );
  }

}
