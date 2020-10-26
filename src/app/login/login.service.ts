import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  login(payload): Promise<boolean> {
    const loginUrl = `https://reqres.in/api/login`;
    return new Promise((res, rej) => {
      this.http.post<{ token: string }>(loginUrl, payload).subscribe(
        (authRes) => {
          if (authRes) {
            this.authService.logIn(authRes.token);
            res(true);
          }
        },
        (err) => {
          rej(err.error.error);
        }
      );
    });
  }
}
