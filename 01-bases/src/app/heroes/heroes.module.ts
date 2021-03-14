import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
    // que cosas contiene el modulo (componentes, pipes, etc.)
    declarations: [
        HeroComponent,
        ListadoComponent
    ],
    // que cosas quiero hacer visibles fuera de este modulo 
    exports: [
        ListadoComponent
    ],
    // aqui van modulos usualmente
    imports: [
        CommonModule
    ]
})
export class HeroesModule {

}