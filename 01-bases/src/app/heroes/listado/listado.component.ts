import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  borrado: string = '';

  constructor() { }

  borrarHeroe(): void {
    this.borrado = this.heroes.pop() || '';
  }

}
