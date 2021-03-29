import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// modules
import { PrimeNgModule } from './../prime-ng/prime-ng.module';
// compoenent
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenadoComponent } from './pages/ordenado/ordenado.component';
// pipes
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { ColorPipe } from './pipes/color.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';


@NgModule({
  declarations: [
    // components
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenadoComponent,
    // pipes
    MayusculasPipe,
    ColorPipe,
    VuelaPipe,
    OrdenarPipe,
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenadoComponent
  ]
})
export class VentasModule { }
