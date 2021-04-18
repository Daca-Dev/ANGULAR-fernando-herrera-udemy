import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.pattern(this.validatorsService.nombreApellidoPattern)],],
    email: [, [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [this.emailValidator]],
    username: [, [Validators.required, this.validatorsService.noPuedeSerStrider]],
    password: [, [Validators.required, Validators.minLength(6)]],
    password2: [, [Validators.required]],
  },
    // opciones
    {
      validators: [this.validatorsService.camposIguales('password', 'password2')]
    });



  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorService,
    private emailValidator: EmailValidatorService
  ) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre: 'David Casas',
      email: 'test1@test.com',
      username: 'dacadev'
    });
  }

  campoNoValido(campo: string): boolean | undefined {
    return this.miFormulario.get(campo)?.invalid
      && this.miFormulario.get(campo)?.touched;
  }

  submitForm(): void {
    console.log(this.miFormulario);
    this.miFormulario.markAllAsTouched();
  }

}
