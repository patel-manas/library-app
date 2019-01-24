import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BookCardComponent } from './components/common/book-card/book-card.component';
import { HeaderComponent } from './components/header/header.component';
import { BooksHomeComponent } from './components/books-home/books-home.component';
import { BookCartComponent } from './components/book-cart/book-cart.component';
import {HttpClientModule} from '@angular/common/http';
import { BookServiceService } from './services/book-service.service';
import { CustomDropdownComponent } from './components/common/custom-dropdown/custom-dropdown.component';

// primeng
import {DialogModule} from 'primeng/dialog';
import {SidebarModule} from 'primeng/sidebar';
import {PanelMenuModule} from 'primeng/panelmenu';
import {ListboxModule} from 'primeng/listbox';
import {ButtonModule} from 'primeng/button';
import {RatingModule} from 'primeng/rating';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { LoginComponent } from './components/login/login.component';
import {DropdownModule} from 'primeng/dropdown';
@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent,
    HeaderComponent,
    BooksHomeComponent,
    BookCartComponent,
    LoginComponent,
    CustomDropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DialogModule,
    SidebarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ListboxModule,
    ButtonModule,
    DropdownModule,
    RatingModule,
    OverlayPanelModule,
    PanelMenuModule
  ],
  providers: [BookServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
