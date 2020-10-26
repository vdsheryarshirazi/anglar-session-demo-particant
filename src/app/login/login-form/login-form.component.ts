import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  hide = true;
  fetching = false;
  error: string;
  loginForm = this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private lService: LoginService) {}
  onSubmit(): void {
    if (!this.loginForm.valid) {
      return;
    }
    this.fetching = true;
    this.lService
      .login(this.loginForm.value)
      .then((res) => {
        this.error = '';
      })
      .catch((err: string) => {
        this.error = err;
      })
      .finally(() => (this.fetching = false));
  }
}
