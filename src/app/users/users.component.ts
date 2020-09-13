import { Component, OnInit } from '@angular/core';
import { users } from '../data/users';
import { coordinates } from '../data/geo';
import { IUser } from '../data/IUser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: IUser[] = [];
  userLoaded = false;
  constructor() {
    // this.users = [...users];

    this.users = users.filter((_, i: number) => i === 0);

    setTimeout(() => {
      users.map((user: IUser, index: number) => {
        user.address.geo = coordinates[index];
      });
      this.userLoaded = true;
    }, 10000);

    console.log(`%cUsersComponent: [constructor]`, 'background: #222; color: #bada55');
  }

  ngOnInit() {
    console.log(`%cUsersComponent: [ngOnInit]`, 'background: #222; color: #bada55');
  }
}
