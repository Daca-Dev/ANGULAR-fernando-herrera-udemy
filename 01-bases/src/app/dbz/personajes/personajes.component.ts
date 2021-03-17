import { Component, Input } from '@angular/core';
// interfaces
import { Personaje } from './../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  @Input() data: Personaje[] = [];

}
