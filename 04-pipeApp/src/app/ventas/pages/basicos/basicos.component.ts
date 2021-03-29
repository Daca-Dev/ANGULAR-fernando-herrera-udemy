import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreCompleto: string = 'DaViD CaSAs';

  fecha: Date = new Date(); // el dia de hoy

}
