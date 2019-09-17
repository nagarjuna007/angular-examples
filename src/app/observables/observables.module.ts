import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ObservablesComponent } from './observables.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'observables', component: ObservablesComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'user/:id', component: UserComponent }
    ]
  }
];

@NgModule({
  declarations: [
    ObservablesComponent,
    HeaderComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: []
})
export class ObservablesModule { }
