import { Component } from '@angular/core';
import { Color, Heroe, Orden } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenado',
  templateUrl: './ordenado.component.html',
  styles: [
  ]
})
export class OrdenadoComponent  {

  toogleMayus: boolean = true;
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna verde',
      vuela: true,
      color: Color.verde
    },
  ];

  organizar: Orden = Orden.nombre;

  toggleMayusculas(): void {
    this.toogleMayus = !this.toogleMayus;
  }

  orden(value: Orden): void {
    this.organizar = value;
  }

}
