import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BookCardComponent } from './components/common/book-card/book-card.component';
import { HeaderComponent } from './components/header/header.component';
import { BooksHomeComponent } from './components/books-home/books-home.component';
import { BookCartComponent } from './components/book-cart/book-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent,
    HeaderComponent,
    BooksHomeComponent,
    BookCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
