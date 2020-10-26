import { EventEmitter, Injectable } from '@angular/core';
import { IUser } from './interfaces/IUser';
import { UserService } from './user.service';
const tokenKey = 'appAuthToken';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: string;
  public isLoggedIn: boolean;
  onAuthChange = new EventEmitter<boolean>();
  constructor(private userService: UserService) {
    this.token = localStorage.getItem(tokenKey) || '';
    this.isLoggedIn = !!this.token;
    if (this.isLoggedIn) {
      this.userService.getUserApi().subscribe((user: IUser) => {
        this.userService.setUser(user);
        this.onAuthChange.emit(this.isLoggedIn);
      });
    }
  }
  logOut(): void {
    localStorage.removeItem(tokenKey);
    this.token = '';
    this.onAuthChange.emit(false);
    this.userService.setUser(undefined);
  }
  logIn(token: string): void {
    this.token = token;
    localStorage.setItem(tokenKey, token);
    this.onAuthChange.emit(true);
    this.userService.getUserApi().subscribe((user: IUser) => {
      this.userService.setUser(user);
    });
  }
}
