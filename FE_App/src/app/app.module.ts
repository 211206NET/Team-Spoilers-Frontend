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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; //added SPA Routing Code
import { FormsModule } from '@angular/forms';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { AuthBtnComponent } from './auth-btn/auth-btn.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { provideRoutes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

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
    UserComponent,
    PageNotFoundComponent, //added SPA Routing Code
    AuthBtnComponent, NavbarComponent
  ],
  imports: [
    AuthModule.forRoot({
      domain: environment.authDomain,
      clientId: environment.authClientId
    }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
