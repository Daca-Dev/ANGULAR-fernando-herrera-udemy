import { Pipe, PipeTransform } from '@angular/core';
import { Heroe, Orden } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], ordenarPor: Orden = Orden.nombre): Heroe[] {
    switch (ordenarPor) {
      case Orden.nombre:
        return heroes.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
      case Orden.vuela:
        return heroes.sort((a, b) => (a.vuela < b.vuela) ? 1 : -1);
      case Orden.color:
        return heroes.sort((a, b) => (a.color > b.color) ? -1 : 1);
      default:
        return heroes;
    }
  }

}
