import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoverSliderDirective } from './hover-slider.directive';
import { ProductComponent } from './product/product.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { FooterContentComponent } from './footer-content/footer-content.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { HeaderComponent } from './header/header.component';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    HoverSliderDirective,
    ProductComponent,
    CartSummaryComponent,
    FooterContentComponent,
    CartListComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ProductModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
