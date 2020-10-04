import { Component } from '@angular/core';
import { shades, IShade } from './data/shades';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  shades: IShade[];
  encoding: boolean;
  options: { display: string; value: boolean }[] = [
    {
      value: true,
      display: 'Encoding',
    },
    {
      value: false,
      display: 'Decoding',
    },
  ];
  inputText: string;
  constructor() {
    this.shades = shades;
    this.encoding = true;
    this.inputText = '';
  }
}
