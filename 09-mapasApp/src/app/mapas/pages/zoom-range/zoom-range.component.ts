import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [`
    .mapa-container {
      width: 100%;
      height: 100%;
    }

    .row {
      background-color: white;
      border-radius: 10px;
      bottom: 50px;
      left: 50px;
      padding: 10px;
      position: fixed;
      z-index: 9999;
      width: 400px
    }
  `]
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {

  @ViewChild('mapa') divMapa!: ElementRef;

  mapa!: mapboxgl.Map;
  zoomLevel: number = 15;
  center: [number, number] = [-74.06453173919633, 4.860637383806111];

  constructor() { }

  ngOnDestroy(): void {
    this.mapa.off('zoom', () => {});
    this.mapa.off('zoomend', () => {});
    this.mapa.off('move', () => {});
  }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center, // logitud y latitud
      zoom: this.zoomLevel, // entre mayor valor, más zoom
    });

    this.mapa.on('zoom', (event) => {
      this.zoomLevel = this.mapa.getZoom();
    });

    this.mapa.on('zoomend', (event) => {
      if (this.mapa.getZoom() > 18) {
        this.mapa.zoomTo(18);
      }
    });

    // movimiento del mapa
    this.mapa.on('move', (event) => {
      const target = event.target;
      const { lng, lat } = target.getCenter();

      this.center = [lng, lat];
    });
  }

  zoomIn(): void {
    this.mapa.zoomIn();
    this.zoomLevel = this.mapa.getZoom();
  }

  zoomOut(): void {
    this.mapa.zoomOut();
    this.zoomLevel = this.mapa.getZoom();
  }

  zoomCambio(valor: string): void {
    const zoom: number = Number(valor);
    this.mapa.zoomTo(zoom);
    this.zoomLevel = this.mapa.getZoom();
  }

}
