import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, ParamMap } from '@angular/router';

import { GameComponent } from './game/game.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { UserComponent } from './user/user.component';
import { SeriesComponent } from './series/series.component';
import { BingoCardComponent } from './bingo-card/bingo-card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AnswerComponent } from './answer/answer.component';

const routes: Routes = [
  { path: 'game', component: GameComponent,
    children: [
      {
        path: 'series', // child route path
        component: SeriesComponent, // child route component that the router renders
      },
      {
        path: 'bingo-card',
        component: BingoCardComponent, // another child route component that the router renders
      }
    ],
  },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'user', component: UserComponent },
  { path: 'series', component: SeriesComponent },
  { path: '',   redirectTo: '/user', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
