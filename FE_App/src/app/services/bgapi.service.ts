import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Answer } from '../models/answer';
import { environment } from 'src/environments/environment';
import { BingoCard } from '../models/bingo-card';
import { User } from '@auth0/auth0-angular';
import { Series } from '../models/series';
import { Player } from '../models/player'
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class BGApiService {

  constructor(private http: HttpClient) {}

  rootURL = environment.bgApiRootUrl;

    getAnswers(): Promise<Answer[]>
    { 
      return firstValueFrom(this.http.get<Answer[]>(this.rootURL + "Answer"))
    }
    getAnswersbyBingoId(id: number): Promise<Answer[]>
    { 
      return firstValueFrom(this.http.get<Answer[]>(this.rootURL + "Answer/" + id))
    }

    createNewAnswer(id: number, ans: Answer)
    {
      return firstValueFrom(this.http.post( this.rootURL + "Answer/" +id, ans))
    }
    updateAnswer(id: number, ans: Answer)
    {
      return firstValueFrom(this.http.put( this.rootURL+ "Answer/" +id, ans))
    }
    getBingoCardbyId(id: number): Promise<BingoCard>
    { 
      return firstValueFrom(this.http.get<BingoCard>(this.rootURL + "BingoCard/" + id))
    }
    getBingoCardbyUserId(id: number): Promise<BingoCard[]>
    {
      return firstValueFrom(this.http.get<BingoCard[]>( this.rootURL + "BingoCard/Get Bingo Cards by " + id))
    }

    getBingoCard(): Promise<BingoCard[]>
    {
      return firstValueFrom(this.http.get<BingoCard[]>(this.rootURL + "BingoCard"))
    }

    createNewBingoCard(bin: BingoCard)
    {
      return firstValueFrom(this.http.post(this.rootURL + "BingoCard", bin))
    }
    
    getSeries(): Promise<Series[]>
    { 
      return firstValueFrom(this.http.get<Series[]>(this.rootURL + "Series"))
    }
    getSeriesbyId(seriesID: number): Promise<Series[]>
    {
      return firstValueFrom(this.http.get<Series[]>(this.rootURL + "/Series/" + seriesID))
    }

    createNewSeries(series: Series)
    {
      return firstValueFrom(this.http.post(this.rootURL + "/Series", series))
    }
    getPlayer(): Promise<Player[]>
    { 
      return firstValueFrom(this.http.get<Player[]>(this.rootURL + "/Player"))
    }

    createNewPlayer(play: Player)
    {
      return firstValueFrom(this.http.post(this.rootURL + "/Player", play))
    }

    getCurrentGame(id: number): Promise<Game[]>
    { 
      return firstValueFrom(this.http.get<Game[]>(this.rootURL + "/Game/" + id))
    }

    createNewGame(game: Game)
    {
      return firstValueFrom(this.http.post(this.rootURL + "/Game", game))
    }
    updateGame(id: number, game: Game)
    {
      return firstValueFrom(this.http.put( this.rootURL+ "Game/" +id, game))
    }

  }
