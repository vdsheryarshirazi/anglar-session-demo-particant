import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss'],
})
export class CartSummaryComponent implements OnInit {
  subTotal: number;
  constructor(private cService: CartService) {
    cService.onAddProduct.subscribe((data) => {
      this.getTotal();
    });
  }

  ngOnInit(): void {}
  getTotal() {
    const subTotal = this.cService.productList.reduce(
      (prev, cItem) => prev + cItem.price,
      0
    );
    this.subTotal = subTotal;
  }
}
