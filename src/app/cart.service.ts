import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public productList = [];
  public onAddProduct = new EventEmitter();
  constructor() {}
}
