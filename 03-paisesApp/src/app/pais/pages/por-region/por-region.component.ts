import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';

  paises: Country[] = [];

  constructor(
    private paisService: PaisService
  ) { }

  activarRegion(region: string): void {
    if (region !== this.regionActiva) {
      this.regionActiva = region;

      this.paisService.buscarPaisesPorRegion(this.regionActiva)
        .subscribe(paises => {
          this.paises = paises;
        });
    }
  }

  getClaseCss(region: string): string {
    return (region === this.regionActiva) ? 'btn-primary' : 'btn-outline-primary';
  }
}
