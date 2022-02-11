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
  
  
  createdBingoCard: BingoCard = {
    id: 0,
    userID: 1,
    gameID: 2,
    Answer: [],
    seriesID: 1
  
  }
 

  newCard() {
    // this.apiService.createNewBingoCard(this.createdBingoCard).then((res)=>
    //   {
    //     //this.createdBingoCard = res;
        
    //     console.log(res);
    //     console.log(this.createdBingoCard.id)
    //   })

  }

  // pickedSeries: Series = {
  //   seriesID: 0,
  //   name: '',
  //   genre: '',
  //   imdbID: 0,
  //   leaderboardID: 0
  // }

  ngOnInit(): void {
    console.log('youre being called')
    // this.apiService.createNewSeries(this.pickedSeries)
    // console.log(this.pickedSeries.seriesID)
  }

}
