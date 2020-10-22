import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  providers: [CartService],
})
export class CartListComponent implements OnInit {
  @Input() list;
  constructor(private cService: CartService) {}
  addProduct(product) {
    this.cService.productList.push(product);
    this.cService.onAddProduct.emit('product added');
  }
  getList() {
    console.log(this.cService.productList);
  }
  ngOnInit(): void {}
}
