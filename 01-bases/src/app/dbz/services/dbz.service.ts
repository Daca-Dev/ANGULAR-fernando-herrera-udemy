import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()
export class DbzService {

  private personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  constructor() { }

  get obtenerPersonajes(): Personaje[]  {
    return [...this.personajes];
  }

  agregarPersonaje( personaje: Personaje ): void {
    this.personajes.push(personaje);
  }
}
