import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Animations } from "./animations.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";

const navRoutes: Routes = [
  {
    path: "animations",
    component: Animations,
    children: [{ path: "home", component: HomeComponent }]
  }
];

@NgModule({
  declarations: [Animations, HeaderComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(navRoutes)
  ],
  providers: []
})
export class AnimationsModule {}
