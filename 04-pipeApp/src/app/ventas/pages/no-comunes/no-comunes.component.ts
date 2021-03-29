import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  // i18nSelect
  nombre: string = 'Fernanda';
  genero: string = 'masculino';

  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla'
  };

  // i18nPlural
  clientes: string[] = ['María', 'Pedro', 'Juan'];
  clientesMapa = {
    '=0': 'No tenemos ningún cliente esperando',
    '=1': 'Tenemos un cliente esperando',
    '=2': 'Tenemos dos cliente esperando',
    other: 'Tenemos # cliente esperando',
  };

  // keyvalue pipe
  persona = {
    nombre: 'David',
    edad: 25,
    direccion: 'Avenida siemppre viva 123'
  };

  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Flash',
      vuela: false
    },
  ];

  // asyn pipe

  miObservable = interval(1000);

  constructor(
    private primengConfig: PrimeNGConfig
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  cambiarCliente(): void {
    if (this.genero === 'femenino') {
      this.genero = 'masculino';
      this.nombre = 'David Casas';
    } else {
      this.genero = 'femenino';
      this.nombre = 'Lina Casas';
    }
  }

  addSubCliente(estado: boolean): void {
    if (estado === true) {
      this.clientes.pop();
    } else {
      this.clientes.push('Benito')
    }
  }
}
