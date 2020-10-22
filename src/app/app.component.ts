import { Component } from '@angular/core';
import { products, IProduct } from './data/products';
import { CartService } from './cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-session-demo';
  products: IProduct[] = [];
  constructor(private cService: CartService, private http: HttpClient) {
    // this.products = products;
    this.http
      .get<IProduct[]>(
        `https://raw.githubusercontent.com/vdsheryarshirazi/anglar-session-demo-particant/sessions/services-modules/src/app/data/product.json`
      )
      .subscribe((data) => {
        this.products = data;
      });
  }
}
