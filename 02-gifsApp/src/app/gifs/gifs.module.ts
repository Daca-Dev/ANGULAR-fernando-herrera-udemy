import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsRoutingModule } from './gifs-routing.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ResultadosComponent } from './components/resultados/resultados.component';


@NgModule({
  declarations: [MainPageComponent, BusquedaComponent, ResultadosComponent],
  exports: [
    MainPageComponent,
    BusquedaComponent,
    ResultadosComponent,
  ],
  imports: [
    CommonModule,
    GifsRoutingModule
  ]
})
export class GifsModule { }
