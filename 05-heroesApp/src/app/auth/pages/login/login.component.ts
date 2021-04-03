import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  constructor(
    private rotuer: Router,
    private authService: AuthService,
  ) { }

  login(): void {
    // Ir al Backend y confirmar que el usuario existe
    // el usuario debe estar alojado en un servicio
    this.authService.login()
      .subscribe( resp => {
        if (resp.id) {
          this.rotuer.navigate(['/heroes']);
        }
      });

  }

  ingresarSinLogin(): void {
    this.authService.logout();
    this.rotuer.navigate(['/heroes']);
  }
}
