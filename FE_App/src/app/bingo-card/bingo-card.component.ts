import { Component, OnInit } from '@angular/core';
import { BGApiService } from '../services/bgapi.service';
import { Answer } from '../models/answer';
import { BingoCard } from '../models/bingocard';

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
      console.log(this.allAnswers);
    })
  }

}
