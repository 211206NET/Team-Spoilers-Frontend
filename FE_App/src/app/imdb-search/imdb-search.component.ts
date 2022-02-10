import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-imdb-search',
  templateUrl: './imdb-search.component.html',
  styleUrls: ['./imdb-search.component.css']
})
export class ImdbSearchComponent implements OnInit {

  @Output() newSearchEvent = new EventEmitter<string>();

  addNewSearch(value: string) {
    this.newSearchEvent.emit(value);
  }



  constructor() { }

  ngOnInit(): void {
  }

}
