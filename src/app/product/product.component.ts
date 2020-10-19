import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() img: string
  @Input() name: string
  @Input() price: number;
  @Input() quantity: number
  constructor() { }

  ngOnInit(): void {
  }

}
