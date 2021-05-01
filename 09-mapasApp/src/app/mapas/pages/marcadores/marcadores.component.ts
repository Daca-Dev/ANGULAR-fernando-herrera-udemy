import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MarcadorColor {
  color: string;
  marker?: mapboxgl.Marker;
  centro?: [number, number];
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [`
    .mapa-container {
      width: 100%;
      height: 100%;
    }

    .list-group {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 999;
      cursor: pointer;
    }
  `]
})
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef;

  mapa!: mapboxgl.Map;
  zoomLevel: number = 15;
  center: [number, number] = [-74.06453173919633, 4.860637383806111];

  // arreglo de marcadores
  marcadores: MarcadorColor[] = [];

  constructor() { }

  ngAfterViewInit(): void {

    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center, // logitud y latitud
      zoom: this.zoomLevel, // entre mayor valor, más zoom
    });

    this.leerLocalStorage();

    // const makerHTML: HTMLElement = document.createElement('div');
    // makerHTML.innerHTML = 'Hola mundo';

    new mapboxgl.Marker({
      draggable: true
    })
      .setLngLat(this.center)
      .addTo(this.mapa);
  }

  irMarcador(marcador: mapboxgl.Marker): void {
    this.mapa.flyTo({
      center: marcador.getLngLat()
    });
  }

  agregarMarcador(): void {

    const color = '#xxxxxx'.replace(/x/g, y => (Math.random() * 16 | 0).toString(16));

    const nuevoMarcador = new mapboxgl.Marker({
      draggable: true,
      color
    })
      .setLngLat(this.center)
      .addTo(this.mapa);

    this.marcadores.push({ color, marker: nuevoMarcador });
    this.guardarMarcador();

    nuevoMarcador.on('dragend', () => {
      this.guardarMarcador();
    });
  }

  guardarMarcador(): void {

    const lngLatArr: MarcadorColor[] = [];

    this.marcadores.forEach(m => {

      const color = m.color;
      const { lng, lat } = m.marker!.getLngLat();

      lngLatArr.push({
        color,
        centro: [lng, lat]
      });

      localStorage.setItem('marcadores', JSON.stringify(lngLatArr));
    });
  }

  leerLocalStorage(): void {
    if (!localStorage.getItem('marcadores')) {
      return;
    }

    const lgnLatArr: MarcadorColor[] = JSON.parse(localStorage.getItem('marcadores')!);

    lgnLatArr.forEach(m => {

      const newMarker = new mapboxgl.Marker({
        color: m.color,
        draggable: true
      })
        .setLngLat(m.centro!)
        .addTo(this.mapa);

      newMarker.on('dragend', () => {
        this.guardarMarcador();
      });

      this.marcadores.push({
        color: m.color,
        marker: newMarker
      });
    });
  }

  borrarMarcador(indice: number): void {
    this.marcadores[indice].marker?.remove();
    this.marcadores.splice(indice, 1);
    this.guardarMarcador();
  }
}
