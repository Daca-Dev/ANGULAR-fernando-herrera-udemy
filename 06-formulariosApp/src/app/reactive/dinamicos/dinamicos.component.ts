import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre: [
      ,
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ],
    favoritos: this.fb.array(
      [
        ['Battlefield'],
        ['Gears of War'],
      ],
      Validators.required
    )
  });

  nuevoFavorito: FormControl = this.fb.control(
    '', // valor
    Validators.required, // validadores sincronos
  );

  get favoritosArr(): FormArray {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(
    private fb: FormBuilder
  ) { }

  campoInvalido(campo: string): boolean | null {
    return this.miFormulario.controls[campo].errors
              && this.miFormulario.controls[campo].touched;
  }

  guardar(): void {

    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      console.log('Formulario invalido');
      return;
    }

    console.log('Formulario Valido');
    console.log(this.miFormulario.value);
  }

  agregarFavorito(): void {

    if (this.nuevoFavorito.invalid) {
      return;
    }
    // FormGroup
    // this.favoritosArr.push( new FormControl(
    //   this.nuevoFavorito.value,
    //   Validators.required
    // ));
    // Form Builder
    this.favoritosArr.push( this.fb.control(
      this.nuevoFavorito.value,
      Validators.required
    ));

    this.nuevoFavorito.reset();
  }

  borrarFavorito(index: number): void {
    this.favoritosArr.removeAt(index);
  }

}
