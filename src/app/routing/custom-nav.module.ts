import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { NavRouteHomeComponent } from './home/home.component';
import { customNavComponent } from './custom-nav.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { HomeOneComponent } from './home-one/homeone.component';
import { ServersComponent } from './servers/servers.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';

import { AuthGuard } from '../auth-guard.service';
import { AuthService } from '../auth.service';
import { CanDeactivateGuard } from '../can-deactivate-guard.service';
import { ServerReslover } from './servers/server/server-reslover.service';

const navRoutes: Routes = [
  {
    path: 'nav', component: customNavComponent, children: [
      { path: 'home', component: NavRouteHomeComponent },
      {
        path: 'users', component: UsersComponent, children: [
          { path: ':id/:name', component: UserComponent }
        ]
      },
      {
        path: 'servers',
        // canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: ServersComponent, children: [
          { path: ':id', component: ServerComponent, reslove: { ServerReslover } },
          { path: ':id/:edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule.forRoot(navRoutes)
  ],
  declarations: [NavRouteHomeComponent, customNavComponent, HeaderComponent, UsersComponent, UserComponent, HomeOneComponent, EditServerComponent, ServersComponent,
    ServerComponent],
  providers: [ServersService, AuthGuard, AuthService, CanDeactivateGuard, ServerReslover]
})
export class CustomNavModule { }
