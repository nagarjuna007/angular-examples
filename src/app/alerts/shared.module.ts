import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import {AlertComponent} './alert.component';

@NgModule({
  declarations: [AlertComponent],
  imports:[
    BrowserModule,
    CommonModule
  ],
  exports:[
    AlertComponent
  ]
})
export class SharedModule {}
