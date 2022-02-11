import { Component, OnInit } from '@angular/core';
import { Imdb } from '../models/imdb';

@Component({
  selector: 'app-imdb',
  templateUrl: './imdb.component.html',
  styleUrls: ['./imdb.component.css']
})
export class ImdbComponent implements OnInit {

  input = "";
  addNewSearch(newSearch: string){
    console.log(newSearch)
    this.input = newSearch;
    fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${this.input}`, {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    "x-rapidapi-key": "bc415f65b0msha4777b82d679a8fp1a042bjsn75e304c61dad"
  }
  })
  .then(response => response.json())
  // .then(data => console.log(data))
  .then(data => {
  this.allData = data.d;
  this.allData.map((item) => {
    console.log(item)
    const name = item.l;
    const apiID = item.id;
    const type = item.q;
    const poster = item.i.imageUrl
  })
  })
  .catch(err => {
  console.error(err);
  });
  }

  constructor() { }
  allData: Imdb[] = []
  
ngOnInit(): void {
  }

}
