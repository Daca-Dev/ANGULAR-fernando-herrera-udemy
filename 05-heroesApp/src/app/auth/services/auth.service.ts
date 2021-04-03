import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { Usuarios } from '../interfaces/auth.interface';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.baseUrl;
  private user: Usuarios | undefined;

  get auth(): Usuarios {
    return {...this.user! };
  }

  constructor(
    private http: HttpClient
  ) { }

  verificaAutenticacion(): Observable<boolean> {
    if (!localStorage.getItem('id')) {
      return of(false);
    }

    return this.http.get<Usuarios>(`${this.baseUrl}/usuarios/1`)
      .pipe(
        map(auth => {
          console.log('map', auth);
          return true;
        })
      );
  }

  login(): Observable<Usuarios> {
    return this.http.get<Usuarios>(`${this.baseUrl}/usuarios/1`)
      .pipe(
        tap( resp => this.user = resp),
        tap( resp => localStorage.setItem('token', resp.id.toString() )),
      );
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem('token');
  }
}
