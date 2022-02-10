import { Component, OnInit } from '@angular/core';
import { BGApiService } from '../services/bgapi.service';
import { BingoCard } from '../models/bingo-card';
import { Series } from '../models/series';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private apiService: BGApiService) { }
  
  
  
  bingoCard: BingoCard = {
    id: 0,
    userID: 0,
    gameID: 0,
    Answer: [],
    seriesID: 0
  
  }

  newCard() {
    // this.apiService.createNewBingoCard(this.bingoCard).then((res)=>
      // {
      //   console.log(res);
      // })

  }

  // pickedSeries: Series = {
  //   seriesID: 0,
  //   name: '',
  //   genre: '',
  //   imdbID: 0,
  //   leaderboardID: 0
  // }

  ngOnInit(): void {
    // this.apiService.createNewSeries(this.pickedSeries)
    // console.log(this.pickedSeries.seriesID)
  }

}
