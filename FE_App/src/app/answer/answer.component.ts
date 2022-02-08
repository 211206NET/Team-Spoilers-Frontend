import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Answer } from '../models/answer';
import { BingoCard } from '../models/bingo-card';
import { BGApiService } from '../services/bgapi.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  constructor() { }

  answerForm(newAnswerFrom: NgForm)
  {
    console.log('form went through', newAnswerFrom)
  }

  ngOnInit(): void {
  }

}
