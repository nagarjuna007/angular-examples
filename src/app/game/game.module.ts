import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { GameComponent } from './game.component';
import { GameHomeComponent } from './game-home/game-home.component';
import { GameHeaderComponent } from './header/header.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'game', component: GameComponent, children: [
          { path: 'home', component: GameHomeComponent }
        ]
      }
    ])
  ],
  declarations: [GameComponent, GameHomeComponent, GameHeaderComponent],
  providers: []
})
export class GameModule { }
