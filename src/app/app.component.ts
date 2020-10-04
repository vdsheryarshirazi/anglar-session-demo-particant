import { Component } from '@angular/core';
import { shades, IShade } from './data/shades';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  shades: IShade[];
  encoding: string;
  options: { display: string; value: string }[] = [
    {
      value: 'true',
      display: 'Encoding',
    },
    {
      value: 'false',
      display: 'Decoding',
    },
  ];
  inputText: string;
  constructor() {
    this.shades = shades;
    this.encoding = 'true';
    this.inputText = '';
  }
}
