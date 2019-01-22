import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  url: any;
  @Input() title: string;
  @Input() quote: string;
  @Input() author: string;
  @Input() cover: string;
  @Input() year: string;
  constructor() {
  }

  ngOnInit() {
    this.url =('https://tvseriescritic.files.wordpress.com/2016/10/stranger-things-bicycle-lights-children.jpg');
  }

  addToCart() {

  }
}
