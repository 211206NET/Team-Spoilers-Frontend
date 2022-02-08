import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Answer } from '../models/answer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BGApiService {

  constructor(private http: HttpClient) {}

  rootURL = environment.bgApiRootUrl;

    getAnswersByBingoId(): Promise<Answer[]>
    { 
      return firstValueFrom(this.http.get<Answer[]>(this.rootURL + "/Answer"))
    }

    createNewAnswer(ans: Answer)
    {
      return firstValueFrom(this.http.post(this.rootURL + "/Answer", ans))
    }
  }
