import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { BOOKS } from './../../../assets/data/BOOKS';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import {SelectItem} from 'primeng/api';
import { BookServiceService } from '../../services/book-service.service';
@Component({
  selector: 'app-books-home',
  templateUrl: './books-home.component.html',
  styleUrls: ['./books-home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BooksHomeComponent implements OnInit {
  books: any = [];
  books$: any;
  isFilterOpen = false;
  catagories:  any[] = [];
  authors: any[] = [];
  ratings: any = [1, 2, 3, 4, 5];
  selectedCat: any[];
  selectedAut: any[];
  searchTerm: string;
  //{ '_id': number; 'title': string; 'quote': string; 'cover': string; 'author': string; 'publication': string; 'year': number; 'rating': number; 'catagory': string; 'sold': number; 'pages': number; 'rented': boolean; }[];

  constructor( private _bookService: BookServiceService) {
    console.log({ BOOKS });
    this.books$ = Observable.from([...BOOKS]);
    this.books = [...BOOKS];
    this.catagories = this.formHeader([...BOOKS].map(book => book['catagory']));
    this.authors = this.formHeader([...BOOKS].map(book => book['author']));

    console.log('==', this.catagories, this.authors);
  }

  ngOnInit() {}

  filterBySearch() {
    console.log(this.searchTerm);
    this._bookService.gerSearchResults(this.searchTerm)
                     .subscribe(books => this.books = books);
  }

  sortBy(sortParameter) {
    console.log(sortParameter);
    switch (sortParameter) {
      case 'Sort':
        this.books = [...BOOKS];
        break;
      case 'rating high to low':
        this.books = [...BOOKS].sort((b1, b2) => +b2['rating'] - +b1['rating']);
        break;
      case 'rating low to high':
        this.books = [...BOOKS].sort((b1, b2) => +b1['rating'] - +b2['rating']);
        break;
      case 'availability':
        this.books = [...BOOKS].sort((b1, b2) => +b1['rented'] - +b2['rented']);
        break;
      case 'pages low to high':
        this.books = [...BOOKS].sort((b1, b2) => +b2['pages'] - +b1['pages']);
        break;
      case 'pages high to low':
        this.books = [...BOOKS].sort((b1, b2) => +b1['pages'] - +b2['pages']);
        break;
      case 'none':
        this.books = [...BOOKS];
        break;
      default:
        this.books = [...BOOKS];
        break;
    }
  }
  openFilter(evt) {
    this.isFilterOpen = true;
  }
  applyFilters() {
    console.log('selected filters', this.selectedAut, this.selectedCat);
    const filterCategories = this.selectedCat &&  this.selectedCat.length > 0 ? this.selectedCat.map(cat => cat.value) : [];
    const filterAuthors =  this.selectedAut &&  this.selectedAut.length > 0 ? this.selectedAut.map(aut => aut.value) : [];
    console.log({filterCategories, filterAuthors});
    let res = [];
    if (filterCategories.length === 0) {
      res = [...BOOKS];
    } else {
      res = [...BOOKS].filter(book => {
        let x = filterCategories.includes(book['catagory']);
        return x;
      });
    }
    if (filterAuthors.length === 0 && filterCategories.length === 0) {
      res = [...BOOKS];
    } else if(filterAuthors.length === 0 && filterCategories.length !== 0) {
      res = res;
    } else {
      res = [...res].filter(book => filterAuthors.includes(book.author));
    }
    this.books = res;
    console.log('a4 filter', this.books);
  }
  cancelFilters() {}
  setCatFilter(e) {
    // this.selectedCat = [...this.selectedCat, ...e.value];
    console.log('cat', e, this.selectedCat);
  }
  setAuthorFilter(e) {
    // this.selectedCat = [...this.selectedAut, ...e.value];
    console.log('aut', e, this.selectedAut);
  }
  resetlFilters() {

  }

  formHeader(data) {
    const uniqueData = Array.from(new Set(data));
    const formedData: any[] =  uniqueData.map(eachdata => {
      const eachOption: any = {label: '', value: ''};
      eachOption['label'] = eachdata;
      eachOption['value'] = eachdata;
      return eachOption;
    });
    return formedData;
  }
  userInfo(event, userInfoPanel) {
    userInfoPanel.toggle(event);
  }
  userCart(event, userCartPanel) {
    userCartPanel.toggle(event);
  }
}
