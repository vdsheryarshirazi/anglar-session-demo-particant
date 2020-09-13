import { Component, Input } from '@angular/core';
import { ICoordinate } from '../../data/ICoordinate';
import { IUser } from '../../data/IUser';
import { users } from '../../data/users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input() ID: number;
  @Input() name: string;
  @Input() email: string;
  @Input() phone: string;
  user: IUser = users[0];
  constructor() {}
  updateProfile(e) {
    /*
    TODO:
    save information
    */
  }
  show() {
    console.log(this.user.username);
  }
  update(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
  }
}
