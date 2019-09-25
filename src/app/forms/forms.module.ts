import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormsComponent } from './forms.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ReactiveFormsComponent} from './reactiveForms/reactive-form.component';

const routes: Routes = [
  {
    path: 'forms', component: FormsComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'reactive', component:ReactiveFormsComponent }
    ]
  }
];

@NgModule({
  declarations: [
    FormsComponent,
    HeaderComponent,
    HomeComponent,
    ReactiveFormsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: []
})
export class CustomFormsModule { }
