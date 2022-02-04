import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnswerComponent } from './answer/answer.component';
import { BingoCardComponent } from './bingo-card/bingo-card.component';
import { GameComponent } from './game/game.component';
import { ImdbComponent } from './imdb/imdb.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { PlayerComponent } from './player/player.component';
import { SeriesComponent } from './series/series.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    AnswerComponent,
    BingoCardComponent,
    GameComponent,
    ImdbComponent,
    LeaderboardComponent,
    PlayerComponent,
    SeriesComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
