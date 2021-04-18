import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { PaiseSmall, Pais } from '../../interfaces/paises.interface';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    region: ['', [Validators.required] ],
    pais: ['', [Validators.required]],
    frontera: ['', [Validators.required]]
  });

  // llenar selectores
  regiones: string[] = [];
  paises: PaiseSmall[] = [];
  // fronteras: string[] = [];
  fronteras: PaiseSmall[] = [];

  // UI
  cargando: boolean = false;

  constructor(
    private fb: FormBuilder,
    private paisesService: PaisesService
  ) { }

  ngOnInit(): void {

    this.regiones = this.paisesService.regiones;

    // cuando cambie la region
    // this.miFormulario.get('region')?.valueChanges
    // .subscribe(
    //   region => {
    //     this.paisesService.getPaisesPorRegion(region)
    //       .subscribe(
    //         paises => {
    //           this.paises = paises;
    //           console.log(this.paises);
    //         }
    //       );
    //   }
    // );

    this.miFormulario.get('region')?.valueChanges
      .pipe(
        tap( ( _ ) => {
          this.miFormulario.get('pais')?.reset('');
          this.cargando = true;
        }),
        switchMap( region => this.paisesService.getPaisesPorRegion(region) )
      )
      .subscribe( paises => {
        this.paises = paises;
        this.cargando = false;
      });

    // cuando cambia el pais
    this.miFormulario.get('pais')?.valueChanges
    .pipe(
      tap( ( _ ) => {
        this.fronteras = [];
        this.miFormulario.get('frontera')?.reset('');
        this.cargando = true;
      }),
      switchMap( codigo => this.paisesService.getPaisPorAlpha3Code(codigo)),
      switchMap( pais => this.paisesService.getPaisesPorCodigos(pais?.borders!))
    )
    .subscribe( paises => {
      // this.fronteras = pais?.borders || [];
      this.fronteras = paises;
      this.cargando = false;
    });
  }

  guardar(): void {
    console.log(this.miFormulario.value);
  }

}
