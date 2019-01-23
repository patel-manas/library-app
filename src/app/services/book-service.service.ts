import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BOOKS } from './../../assets/data/BOOKS';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/bufferCount';
import { of as observableOf } from 'rxjs/observable/of';

@Injectable()
export class BookServiceService {

  constructor(private _http: HttpClient) { }

  getBooks(): Observable<any> {
    return observableOf([...BOOKS]);
  }

  gerSearchResults(term: string): Observable<any> {
   const response = [...BOOKS].filter(book => {
     return (book.catagory.toUpperCase().includes(term.toUpperCase()) ||
             book.author.toUpperCase().includes(term.toUpperCase()) ||
             book.title.toUpperCase().includes(term.toUpperCase()));
   });
   return observableOf([...response]);
  }

}
