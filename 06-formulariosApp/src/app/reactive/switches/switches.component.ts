import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [false, Validators.required],
    condiciones: [false, Validators.requiredTrue],
  });

  persona = {
    genero: 'F',
    notificaciones: true
  };

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.miFormulario.reset({...this.persona, condiciones: true});

    // this.miFormulario.get('condiciones')?.valueChanges
    //   .subscribe( condicion => {
    //     console.log(condicion);
    //   });

    // this.miFormulario.valueChanges
    //   .subscribe( form => {
    //     delete form.condiciones;
    //     this.persona = form;
    //   });

    this.miFormulario.valueChanges
      .subscribe( ({ condiciones, ...rest}) => {
        this.persona = rest;
      });
  }

  guardar(): void {

    const fromValue = {...this.miFormulario.value};
    delete fromValue.condiciones;

    this.persona = fromValue;
    console.log(this.persona);
  }
}
