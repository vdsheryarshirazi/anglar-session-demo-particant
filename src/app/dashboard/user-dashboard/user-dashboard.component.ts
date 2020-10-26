import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { IUser } from '../../interfaces/IUser';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
})
export class UserDashboardComponent implements OnInit {
  user: IUser;
  @Output() edit = new EventEmitter();
  constructor(private userService: UserService, private authService: AuthService) {
    this.user = userService.user;
    userService.onUserChange.subscribe((user: IUser) => {
      this.user = user;
    });
  }

  ngOnInit(): void {}
  logout(): void {
    this.authService.logOut();
  }
  onEdit(): void {
    this.edit.emit();
  }
}
