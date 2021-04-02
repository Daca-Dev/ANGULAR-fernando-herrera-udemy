import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  heroes: Heroe[] = [];
  heroeSelecionado!: Heroe | undefined;

  constructor(
    private heroeService: HeroesService
  ) { }

  ngOnInit(): void {
  }

  buscando(): void {
    this.heroeService.BuscarHeroes(this.termino.trim())
      .subscribe( heroes => {
        this.heroes = heroes
      });
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent): void {
    
    if (event.option.value === "") {
      this.heroeSelecionado = undefined;
      return;
    }
    const heroe: Heroe = event.option.value;
    
    this.termino = heroe.superhero;

    this.heroeService.getHeroePorId( heroe.id! )
      .subscribe( resp => {
        this.heroeSelecionado = resp;
      })
    
  }
}
