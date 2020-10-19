import { Component } from '@angular/core';
import {products, IProduct} from './data/products'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-session-demo';
  products: IProduct[] = [];
  constructor() {
    this.products = products;
  }
}
