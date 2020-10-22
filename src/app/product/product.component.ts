import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() img: string;
  @Input() name: string;
  @Input() price: number;
  @Input() quantity: number;
  @Output() addProduct = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  add() {
    this.addProduct.emit();
  }
}
