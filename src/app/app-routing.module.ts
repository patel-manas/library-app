import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksHomeComponent } from './components/books-home/books-home.component';

const routes: Routes = [{
  path: '',
  pathMatch:'full',
  component: BooksHomeComponent
},{
  path: 'home',
  pathMatch:'full',
  component: BooksHomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
