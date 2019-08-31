import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './alerts/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './alerts/success-alert/success-alert.component';
import { RouterModule } from "@angular/router";
import { GameModule } from './game/game.module';
import {ServicesModule} from './services/services.module';
import { SiteMapComponent } from './site-map/site-map.component';
import { ServerModule } from './server-module/server.module';
import { ShoppingModule } from './shopping/shopping.module';
import { ExamplesModule } from './examples/examples.module';
import { DropdownDirective } from './shared/dropdown.directive';
import {CustomNavModule} from './routing/custom-nav.module';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, GameModule, ServerModule, ShoppingModule, CustomNavModule,ExamplesModule,ServicesModule,
    RouterModule.forRoot([
      { path: '', component: SiteMapComponent }
    ])
  ],
  declarations: [AppComponent, WarningAlertComponent, SuccessAlertComponent, SiteMapComponent, DropdownDirective],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
