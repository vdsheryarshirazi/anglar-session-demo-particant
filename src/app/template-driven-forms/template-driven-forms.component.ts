import { Component, OnInit } from '@angular/core';
import { User } from '../data';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users = [];
  user = new User(null, '','','');

  register(formData: any) {
    console.log('formData:', formData);
    const { firstName, lastName, email, id } = formData.value;
    this.users.push({ id, firstName, lastName, email });
    formData.reset();
  }

  edit(user) {
    const currentUser = this.users.find(x => x.id === user.id);
    const { id, firstName, lastName, email } = currentUser;

    this.user.id = id;
    this.user.firstName = firstName;
    this.user.lastName = lastName;
    this.user.email = email;
  }

}
