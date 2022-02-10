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
    id: 1,
    userName: '',
    password: '',
    BingoCard: []
  }
  
  bingo: BingoCard[] = [];
// {
//   id: 0,
//   userID: this.user.id,
//   gameID: 0,
//   seriesID: 0,
//   Answer: []
// }
  answer: Answer =
  {
    id: 0,
    block: '',
    isMarked: false,
    bingoCardID: 1
  }

//displayFromSubmitError: boolean = false;
  

  answerForm(newAnswerFrom: NgForm)
  {
    console.log('form went through', newAnswerFrom, this.answer)
    if(newAnswerFrom.form.status === 'VALID')
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
          //console.log(this.answer.bingoCardID)
          this.apiService.createNewAnswer(this.answer).then((res) =>
          {
            
            console.log(res);
          })
        })
        console.log(this.bingo)
        })
        
    }
    else{
      alert('you didnt fill your answer correctly')
    }
    
  }

  ngOnInit(): void {
  }

}
