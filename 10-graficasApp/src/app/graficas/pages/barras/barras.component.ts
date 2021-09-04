import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.scss']
})
export class BarrasComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Datos A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Valor B' },
    { data: [54, 87, 54, 95, 21, 32, 58], label: 'Info C' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public randomize(): void {
    console.log('entry');
    this.barChartData.forEach(element => {
      element.data = element.data?.map( () => Math.round(Math.random() * 100))
    });
  }

}
