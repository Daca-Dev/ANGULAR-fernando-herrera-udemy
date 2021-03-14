import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `<h1>{{ title }}</h1>

    <h3>La base es: <strong> {{ base }} </strong> </h3>
    <button (click)="acumular(-base)">- {{ base }}</button>
    <span> {{ contador }} </span>
    <button (click)="acumular(base)">+ {{ base }}</button>
    `
})
export class ContadorComponent {
    title = 'Contador App';
    contador = 0;
    base = 5;

    acumular(valor: number): void {
        this.contador += valor;
    }
}