import { Component, OnInit , Input} from '@angular/core';
import { BGApiService } from '../services/bgapi.service';
import { Answer, Table } from '../models/answer';
import { BingoCard } from '../models/bingo-card';
import { AnswerComponent } from '../answer/answer.component';
import { Game } from '../models/game';
import { User } from '@auth0/auth0-angular';
import { RouteConfigLoadEnd, Router } from '@angular/router';


const emptyTable = [
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
]

@Component({
  selector: 'app-bingo-card',
  templateUrl: './bingo-card.component.html',
  styleUrls: ['./bingo-card.component.css']
})

export class BingoCardComponent implements OnInit {

  constructor(private apiService: BGApiService, private router: Router) { }

  id = 49;
  workingCard = 'It works';
  //userlist: User[] = [];
  //id=0;
  user: User = {
    id: 1,
    userName: '',
    password: '',
    BingoCard: []
  }
  game: Game = {
    id: 2,
    question: 'What is going to Happen in the Show or Movie',
    seriesID: 0,
    playerID: 0,
    hasWinner: false
  }
  
  bingo: BingoCard = {
    id: 49,
    seriesID: 1,
    userID: 1,
    gameID: 2,
    Answer: []
  }
  answer: Answer[] = [];

  table: Table = [...emptyTable];

//cardID = this.bingo.id;
  bingoWon() {
    console.log('bingo Won!')
    this.game.hasWinner == true;
  }

  sqaureClicked() {
    console.log('sqaure clicked')
    
  }

  

  ngOnInit(): void {
    //this.cardID = this.bingo.id;
    //console.log(this.cardID);
    console.log(this.bingo.id)
    this.apiService.getBingoCardbyId(49).then((cardy) =>
    {
      this.bingo = cardy;
      
      this.apiService.getAnswersbyBingoId(49).then((ansArray) => {
        this.answer = ansArray;
        this.getTableFromAnswer();
      });
    });

  
  }
  getTableFromAnswer() { 
    this.table = [...emptyTable]
    for (let answer of this.answer) {
      const row = (answer.id - 1) / 5;
      const col = (answer.id - 1) % 5;
      this.table[row][col] = answer
    }
  }
}


