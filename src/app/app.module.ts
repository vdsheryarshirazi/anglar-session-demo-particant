import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { AppHighlighterComponent } from './highlighter/highlighter.component';

@NgModule({
  declarations: [AppComponent, UsersComponent, UserComponent, AppHighlighterComponent],
  imports: [BrowserModule, AppRoutingModule /*, FormsModule*/],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
