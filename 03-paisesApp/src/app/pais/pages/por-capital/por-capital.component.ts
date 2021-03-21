import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent{

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(
    private paisService: PaisService
  ) { }

  buscar(termino: string): void {

    this.termino = termino;

    this.paisService.buscarPaisPorCapital(this.termino)
      .subscribe(paises => {
        this.paises = paises;
        this.hayError = false;

      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });
  }

  sugerencias(termino: string): void {
    this.hayError = false;
    // TODO crear sugerencias
  }

}
