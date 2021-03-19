import { Component, Input, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  constructor(
    private gifsService: GifsService
  ) { }

  ngOnInit(): void {
  }

  get resultados(): Gif[] {
    return this.gifsService.resultados;
  }

}
