import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(
    private gifsService: GifsService
  ) {}

  buscar(termino: string): void {

    const valor = this.txtBuscar.nativeElement.value;
    this.gifsService.busquedaGifs( valor );
    this.txtBuscar.nativeElement.value = '';

  }
}
