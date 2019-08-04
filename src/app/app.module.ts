import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WarningAlertComponent } from './alerts/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './alerts/success-alert/success-alert.component';
import { RouterModule } from "@angular/router";
import { GameModule } from './game/game.module';
import { SiteMapComponent } from './site-map/site-map.component';
import { ServerModule } from './server-module/server.module';
import { ShoppingModule } from './shopping/shopping.module';
import {ExamplesModule} from './examples/examples.module';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, GameModule, ServerModule, ShoppingModule,ExamplesModule,
    RouterModule.forRoot([
      { path: '', component: SiteMapComponent }
    ])
  ],
  declarations: [AppComponent, HelloComponent,  WarningAlertComponent, SuccessAlertComponent, SiteMapComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
