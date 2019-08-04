import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { ServerModuleComponent } from './servermodule.component';
import { ServerElementComponent } from './addServers/serverelement.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementTwoComponent } from './server-element/server-element.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'server', component: ServerModuleComponent, children: [
          { path: 'serverElement', component: ServerElementComponent }
        ]
      }
    ])
  ],
  declarations: [ServerModuleComponent, ServerElementComponent, CockpitComponent, ServerElementTwoComponent],
  providers: []
})
export class ServerModule { }
