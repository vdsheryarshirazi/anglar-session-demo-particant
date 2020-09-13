import { Component, OnInit } from '@angular/core';
import { IUser } from '../Idata';
import { users } from '../data';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.scss'],
})
export class GithubUserComponent implements OnInit {
  user: IUser;
  constructor() {
    this.user = users[0];
  }

  ngOnInit(): void {}
}
