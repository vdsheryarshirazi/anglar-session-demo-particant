import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-footer-content',
  templateUrl: './footer-content.component.html',
  styleUrls: ['./footer-content.component.scss'],
})
export class FooterContentComponent implements OnInit {
  constructor(private cService: CartService) {
    console.log(cService.productList);
  }

  ngOnInit(): void {}
}
