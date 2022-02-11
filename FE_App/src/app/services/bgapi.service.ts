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
      return firstValueFrom(this.http.get<Answer[]>(this.rootURL + "/Answer"))
    }
    getAnswersbyBingoId(id: number): Promise<Answer[]>
    { 
      return firstValueFrom(this.http.get<Answer[]>(this.rootURL + "/Answer/" + id))
    }

    createNewAnswer(ans: Answer)
    {
      return firstValueFrom(this.http.post( this.rootURL + "/Answer/1", ans))
    }
    getBingoCardbyId(id: number): Promise<BingoCard>
    { 
      return firstValueFrom(this.http.get<BingoCard>(this.rootURL + "/BingoCard/" + id))
    }
    getBingoCardbyUserId(id: number): Promise<BingoCard[]>
    {
      return firstValueFrom(this.http.get<BingoCard[]>( this.rootURL + "BingoCard/Get Bingo Cards by " + id))
    }

    getBingoCard(): Promise<BingoCard[]>
    {
      return firstValueFrom(this.http.get<BingoCard[]>(this.rootURL + "/BingoCard"))
    }

    createNewBingoCard(bin: BingoCard)
    {
      return firstValueFrom(this.http.post(this.rootURL + "/BingoCard", bin))
    }
    
    getSeries(): Promise<Series[]>
    { 
      return firstValueFrom(this.http.get<Series[]>(this.rootURL + "/Series"))
    }

    createNewSeries(ans: Answer)
    {
      return firstValueFrom(this.http.post(this.rootURL + "/Series", ans))
    }
    getPlayer(): Promise<Player[]>
    { 
      return firstValueFrom(this.http.get<Player[]>(this.rootURL + "/Player"))
    }

    createNewPlayer(ans: Player)
    {
      return firstValueFrom(this.http.post(this.rootURL + "/Player", ans))
    }

    getCurrentGame(id: number): Promise<Game[]>
    { 
      return firstValueFrom(this.http.get<Game[]>(this.rootURL + "/Game/" + id))
    }

    createNewGame(ans: Game)
    {
      return firstValueFrom(this.http.post(this.rootURL + "/Game", ans))
    }

  }
