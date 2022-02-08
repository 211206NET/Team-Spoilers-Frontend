import { Component, OnInit } from '@angular/core';
import { BGApiService } from '../services/bgapi.service';
import { Answer } from '../models/answer';
import { BingoCard } from '../models/bingo-card';
import { AnswerComponent } from '../answer/answer.component';

@Component({
  selector: 'app-bingo-card',
  templateUrl: './bingo-card.component.html',
  styleUrls: ['./bingo-card.component.css']
})
export class BingoCardComponent implements OnInit {

  constructor(private apiService: BGApiService) { }

  allAnswers: Answer[] = [];

  ngOnInit(): void {
    this.apiService.getAnswersByBingoId().then((ansArray) =>
    {
      this.allAnswers = ansArray;
      this.allAnswers.forEach((a) => {
        console.log(a.block)
      });
    })
  }

}
