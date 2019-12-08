import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Offline } from "./offline.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { PostComponent } from "./post/post.component";

const navRoutes: Routes = [
  {
    path: "Offline",
    component: Offline,
    children: [{ path: "home", component: HomeComponent }]
  }
];

@NgModule({
  declarations: [Offline, HeaderComponent, HomeComponent, PostComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(navRoutes)],
  providers: []
})
export class OfflineModule {}
// ng add @angular/pwa
// ng build --prod
// npm install -g http-server -p 9000