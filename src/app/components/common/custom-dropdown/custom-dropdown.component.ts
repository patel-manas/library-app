import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent implements OnInit {

  @Input() menu: any;
  @Output() sortEmitter = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  sortBy(option) {
    this.sortEmitter.emit(option);
  }
}
