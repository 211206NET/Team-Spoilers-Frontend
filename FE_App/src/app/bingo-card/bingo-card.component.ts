import { Component, OnInit } from '@angular/core';
import { BGApiService } from '../services/bgapi.service';
import { Answer } from '../models/answer';
import { BingoCard } from '../models/bingo-card';
import { AnswerComponent } from '../answer/answer.component';
import { Game } from '../models/game';
import { User } from '@auth0/auth0-angular';
import { createMayBeForwardRefExpression } from '@angular/compiler';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-bingo-card',
  templateUrl: './bingo-card.component.html',
  styleUrls: ['./bingo-card.component.css']
})
export class BingoCardComponent implements OnInit {

  constructor(private apiService: BGApiService, private router: Router) { }

id = 0;

userlist: User[] = [];
user: User = {
  id: 0,
  userName: '',
  password: '',
  BingoCard: []
}

bingo: BingoCard[] = [];

answer: Answer[] = [];

  ngOnInit(): void {   
    this.apiService.getBingoCard().then((bingoArray) => 
    {
      this.bingo = bingoArray;
      bingoArray.forEach(bingo =>{
        var currCard: BingoCard = {
          id: bingo.id,
          userID: bingo.userID,
          seriesID: bingo.seriesID,
          gameID: bingo.gameID,
          Answer: bingo.Answer
        }
        this.bingo.push(currCard)
        
        this.apiService.getAnswersbyBingoId(bingo.id).then((ansArray) =>{
          this.answer = ansArray;
          this.answer.forEach((a) => {
            console.log(a.block)
          });
        })
      })
      console.log(this.bingo)
    })

    function clear() {}
    function isBingo() {}
    
    
  }

    
}
