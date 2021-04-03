import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { Usuarios } from '../../../auth/interfaces/auth.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .container {
      margin: 10px;
    }`
  ]
})
export class HomeComponent {

  get auth() {
    return this.authService.auth;
  }

  constructor(
    private rotuer: Router,
    private authService: AuthService,
  ) { }

  logout(): void {
    // Ir al Backend y confirmar que el usuario existe
    // el usuario debe estar alojado en un servicio

    this.rotuer.navigate(['/auth']);

  }

}
