import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { ServiceHeaderComponent } from './header/header.component';
import { ServiceComponent } from './service.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { LoggingService } from './logging.service';
import { AccountsService } from './accounts.service';
import { UsersService } from './users.service';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot([
    {
      path: 'services', component: ServiceComponent, children: [
        { path: 'home', component: HomeComponent }
      ]
    }
  ])
  ],
  declarations: [HomeComponent, ServiceComponent, ServiceHeaderComponent, AccountComponent, NewAccountComponent],
  providers: [AccountsService, LoggingService, UsersService]
})
export class ServicesModule { }
