import { Component } from '@angular/core';

@Component({
  selector: 'app-user-output',
  templateUrl: './user-output.component.html',
  styleUrls: ['./user-output.component.scss'],
})
export class UserOutputComponent {
  output: string;
  showOutput: boolean;

  constructor() {
    this.showOutput = false;
  }

  onShowOutput(reverseName) {
    this.showOutput = true;
    this.output = reverseName;
  }
}
