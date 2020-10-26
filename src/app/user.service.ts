import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './interfaces/IUser';
import { Observable } from 'rxjs';

const userKey = 'user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: IUser;
  onUserChange = new EventEmitter<IUser>();
  constructor(private http: HttpClient) {
    const user = localStorage.getItem(userKey);
    if (user) {
      this.user = JSON.parse(user) || undefined;
    }
  }
  setUser(user: IUser): void {
    this.user = user;
    if (user) {
      localStorage.setItem(userKey, JSON.stringify(user));
    } else {
      localStorage.removeItem(userKey);
    }
    this.onUserChange.emit(user);
  }
  getUser(): IUser {
    if (this.user) {
      return this.user;
    }
    const user = localStorage.getItem(userKey);
    return user ? JSON.parse(user) : undefined;
  }
  updateUserApi(data): Promise<any> {
    return new Promise((res, rej) => {
      this.http.patch('https://reqres.in/api/users/2', data).subscribe(
        (resUser: { email: string }) => {
          const dataCopy = { ...this.user.data, ...resUser };
          const user = {
            ...this.user,
            data: dataCopy,
          };
          this.setUser(user);
          res(resUser);
        },
        (err) => {
          rej(err.error.error);
        }
      );
    });
  }
  getUserApi(): Observable<IUser> {
    return this.http.get<IUser>('https://reqres.in/api/users/2');
  }
}
