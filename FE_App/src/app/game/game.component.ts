import { Component, OnInit } from '@angular/core';
import { BGApiService } from '../services/bgapi.service';
import { Series } from '../models/series';
import { BingoCard } from '../models/bingo-card';
import { User } from '@auth0/auth0-angular';
import { Game } from '../models/game';



@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor( private apiService: BGApiService) { }

  // user: User = {
  //   id: 0,
  //   userName: '',
  //   password: '',
  //   BingoCard: []
  // }
  // game: Game = {
  //   id:0,
  //   question: 'What is going to Happen in the Show or Movie',
  //   seriesID: 2,
  //   playerID: 1,
  //   hasWinner: false
  // }
  
  ngOnInit(): void {
    // this.apiService.createNewGame(this.game).then((res)=>
    // {
    //   console.log(res);
    // })
  }

}
