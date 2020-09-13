import { Component, OnInit } from '@angular/core';
import { users } from '../data/users';
import { coordinates } from '../data/geo';
import { IUser } from '../data/IUser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  users: IUser[] = [];
  userLoaded = false;
  constructor() {
    this.users = [...users];
  }
}
