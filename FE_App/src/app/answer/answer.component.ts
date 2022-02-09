import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Answer } from '../models/answer';
import { BingoCard } from '../models/bingo-card';
import { BGApiService } from '../services/bgapi.service';
import { User } from '../models/user';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  constructor(private apiService: BGApiService) { }

  id = 0;

//userlist: User[] = [];

  user: User = {
    id: 0,
    userName: '',
    password: '',
    BingoCard: []
  }
  
  bingo: BingoCard[] = [];
  
  answer: Answer = {
    id: 0,
    block: '',
    isMarked: false,
    bingoCardID: 0
  }

  displayFormSubmitError: boolean = false;

  answerForm(newAnswerFrom: NgForm)
  {
    console.log('form went through', newAnswerFrom)
    if(newAnswerFrom.form.status == 'VALID')
    {
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
        
        this.apiService.createNewAnswer(this.answer).then((res) =>
        {
          console.log(res);
        })
      })
      console.log(this.bingo)
    })
      // this.bgAPI.createNewAnswer(this.answer).then((res) =>
      // {
      //   console.log(res);
      // })
    }
    else
    {
      this.displayFormSubmitError = true;
    }
  }

  ngOnInit(): void {
  }

}
