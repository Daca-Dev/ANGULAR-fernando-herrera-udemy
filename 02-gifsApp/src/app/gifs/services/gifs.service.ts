import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse } from './../interfaces/gifs.interface';
import { Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'O7yvsisd1W0OKmyY8tWJAQzIwblErMNi';
  private servicioURL: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  constructor(
    private http: HttpClient
  ) {
    // OPCION 1
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
    // OPCION 2
    // if (localStorage.getItem('historial')) {
    //   this._historial = JSON.parse(localStorage.getItem('historial')!);
    // }
  }

  get historial(): string[] {
    return [...this._historial];
  }

  busquedaGifs(query: string = ''): void {

    if (query.trim().length === 0) {
      return;
    }

    query = query.trim().toLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.slice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params =  new HttpParams()
          .set('api_key', this.apiKey)
          .set('limit', '10')
          .set('q', query);

    this.http.get<SearchGifsResponse>(`${this.servicioURL}/search`, {params})
      .subscribe((response) => {
        console.log(response.data);
        this.resultados = response.data;

        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });
  }
}
