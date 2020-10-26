import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoggedIn = false;
  showUpdate = false;
  constructor(private authService: AuthService) {
    this.isLoggedIn = authService.isLoggedIn;
    authService.onAuthChange.subscribe((isLoggedIn: boolean) => {
      this.isLoggedIn = isLoggedIn;
    });
  }
  showUpdateForm(): void {
    this.showUpdate = true;
  }
  hideUpdateForm(): void {
    this.showUpdate = false;
  }
}
