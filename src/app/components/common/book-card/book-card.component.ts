import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BookCardComponent implements OnInit {
  url: any;
  @Input() title: string;
  @Input() quote: string;
  @Input() author: string;
  @Input() cover: string;
  @Input() year: string;
  @Input() star: string;
  @Input() pages : string;
  @Input() rented: string;
  @Output() addToCartEmmiter = new EventEmitter<any>();
  @Output() removeFromCartEmmiter = new EventEmitter<any>();
  addMode: boolean = true;

  constructor() {

  }

  ngOnInit() {
    this.url = ('https://tvseriescritic.files.wordpress.com/2016/10/stranger-things-bicycle-lights-children.jpg');
  }

  addToCart() {
    this.addToCartEmmiter.emit();
    this.addMode = false;
  }

  removeFromCart() {
    this.removeFromCartEmmiter.emit();
    this.addMode = true;
  }
  result(star) {
    return star > 2.5;
  }
}
