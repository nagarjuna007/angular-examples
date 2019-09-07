import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { SiteMapComponent } from './site-map/site-map.component';
import { NoDataFoundComponent } from './routing/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: SiteMapComponent },
  { path: 'not-found', component: NoDataFoundComponent },
  { path: '**', redirectTo: '/not-found' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }