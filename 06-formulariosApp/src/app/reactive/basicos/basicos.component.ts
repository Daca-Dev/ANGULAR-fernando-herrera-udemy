import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX 4080ti'),
  //   precio: new FormControl(1500),
  //   existencias: new FormControl(10),
  // });

  miFormulario: FormGroup = this.fb.group({
    nombre: [
      '', // valor
      [ // validadores sincronos
        Validators.required,
        Validators.minLength(3)
      ],
    ],
    precio: [
      0,
      [
        Validators.min(0),
        Validators.required
      ]
    ],
    existencias: [
      0,
      [
        Validators.required,
        Validators.min(0)
      ]
    ],
  });

  constructor(
    private fb: FormBuilder
  ) { }

  campoNoEsValido( campo: string ): boolean | null {
    return this.miFormulario.controls[campo].errors
              && this.miFormulario.controls[campo].touched;
  }

  guardar(): void {

    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);

    this.miFormulario.reset();
  }

}
