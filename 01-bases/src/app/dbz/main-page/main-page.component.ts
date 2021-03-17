import { Component } from '@angular/core';
// service
import { DbzService } from '../services/dbz.service';
// interface
import { Personaje } from './../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  get personajes(): Personaje[] {
    return this.dbzService.obtenerPersonajes;
  }

  // agregarNuevoPersonaje( argumento: Personaje ): void {
  //   console.log('Main page component');
  //   console.log(argumento);
  //   this.personajes.push(argumento);
  // }

  constructor(
    // injeccción de dependencias
    private dbzService: DbzService
  ) { }

}
