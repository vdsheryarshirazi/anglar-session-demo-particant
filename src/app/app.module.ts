import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoverSliderDirective } from './hover-slider.directive';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HoverSliderDirective,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
