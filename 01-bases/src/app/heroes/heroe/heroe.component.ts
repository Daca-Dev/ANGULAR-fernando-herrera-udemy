import { Component } from '@angular/core';


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
})
export class HeroComponent {

    nombre: string = 'Iron Man';
    edad: number = 35;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }
    cambiarEdad(): void {
        this.edad = 25;
    }
}