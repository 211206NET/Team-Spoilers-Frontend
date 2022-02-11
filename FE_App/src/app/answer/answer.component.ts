import { Component, OnInit, Input } from '@angular/core';
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
  @Input("cardID") cardID = 0;

  constructor(private apiService: BGApiService) { }

  //@Input() bingoAnswer = '';
  

//userlist: User[] = [];

  user: User = {
    id: 1,
    userName: '',
    password: '',
    BingoCard: []
  }
  
  bingo: BingoCard =
{
  id: 49,
  userID: this.user.id,
  gameID: 2,
  seriesID: 1,
  Answer: []
}
  answer: Answer =
  {
    id: 0,
    block: '',
    isMarked: false,
    bingoCardID: 49
  }

//displayFromSubmitError: boolean = false;
  

  answerForm(newAnswerFrom: NgForm)
  {
    console.log(50);
    console.log('form went through', newAnswerFrom, this.answer)
    if(newAnswerFrom.form.status === 'VALID')
    {
      this.apiService.getBingoCardbyId(49).then((cardy) => 
      {
        this.bingo = cardy;
        
          //console.log(this.answer.bingoCardID)
          this.apiService.createNewAnswer(this.bingo.id, this.answer).then((res) =>
          {
            console.log(res);
          })
        })
        console.log(this.bingo)
        }
        
    }
    
    ngOnInit(): void {
    
    }
  }


