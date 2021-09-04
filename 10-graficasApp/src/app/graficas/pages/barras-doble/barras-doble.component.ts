import { Component } from '@angular/core';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styleUrls: ['./barras-doble.component.scss']
})
export class BarrasDobleComponent  {

  data: ChartDataSets[][] = [
    [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Datos A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Valor B' },
      { data: [54, 87, 54, 95, 21, 32, 58], label: 'Info C' }
    ],
    [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Datos A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Valor B' }
    ],
  ]

  randomize(data: ChartDataSets[]): void {
    console.log('entry');
    data.forEach(element => {
      element.data = element.data?.map( () => Math.round(Math.random() * 100))
    });
  }

  randomColor(data: ChartDataSets[]): void {
    data.forEach(element => {
      const color = '#xxxxxx'.replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
      element.backgroundColor = color;
    });
  }

}
