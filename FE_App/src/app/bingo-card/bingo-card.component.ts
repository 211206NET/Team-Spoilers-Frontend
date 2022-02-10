import { Component, OnInit } from '@angular/core';
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

  id = 1;
  //userlist: User[] = [];
  user: User = {
    id: 0,
    userName: '',
    password: '',
    BingoCard: []
  }
  game: Game = {
    id: 0,
    question: 'What is going to Happen in the Show or Movie',
    seriesID: 0,
    playerID: 0,
    hasWinner: false
  }
  
  bingo: BingoCard[] = [];
  answer: Answer[] = [];

  table: Table = [...emptyTable];


  bingoWon() {
    console.log('bingo Won!')
    this.game.hasWinner == true;
  }

  sqaureClicked() {
    console.log('sqaure clicked')
    
  }

  ngOnInit(): void {
    console.log(this.game.hasWinner)
    this.apiService.getBingoCard().then((bingoArray) => {
      this.bingo = bingoArray;
      bingoArray.forEach(bingo => {
        var currCard: BingoCard = {
          id: bingo.id,
          userID: bingo.userID,
          seriesID: bingo.seriesID,
          gameID: bingo.gameID,
          Answer: bingo.Answer
        }
        this.bingo.push(currCard)

        this.apiService.getAnswersbyBingoId(bingo.id).then((ansArray) => {
          this.answer = ansArray;
          this.getTableFromAnswer();
          this.answer.forEach((a) => {
            console.log(a.block)
          });
        })
      })
      console.log(this.bingo)
    })
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
