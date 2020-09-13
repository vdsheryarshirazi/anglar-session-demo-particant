import { Component, Output, EventEmitter } from '@angular/core';

const reverse = (str: string = '') => str.split('').reverse().join('');

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss'],
})
export class UserInputComponent {
  name: string;
  @Output() showName: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.name = '';
  }

  update(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    this.name = reverse(input.value);
  }

  showResult() {
    this.showName.emit(this.name);
  }
}
