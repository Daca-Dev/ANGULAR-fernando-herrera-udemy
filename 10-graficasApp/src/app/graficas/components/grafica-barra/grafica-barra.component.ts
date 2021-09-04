import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.scss']
})
export class GraficaBarraComponent implements OnInit {
  
  @Input() barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  @Input() horizontalBar: boolean = false;
  @Input() barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Datos A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Valor B' },
    { data: [54, 87, 54, 95, 21, 32, 58], label: 'Info C' }
  ];

  barChartType: ChartType = 'bar';
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLegend = true;

  constructor() {
    if ( this.horizontalBar ) {
      this.barChartType = 'horizontalBar';
    }
  }

  ngOnInit(): void {
  }

}
