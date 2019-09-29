import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CustomPipeComponent } from "./custom-pipe.component";
import { PipeHeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { ShortenPipe } from "./shorten.pipe";
import { FilterPipe } from "./filter.pipe";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: "pipes",
        component: CustomPipeComponent,
        children: [{ path: "", component: HomeComponent }]
      }
    ])
  ],
  declarations: [
    CustomPipeComponent,
    PipeHeaderComponent,
    HomeComponent,
    ShortenPipe,
    FilterPipe
  ],
  providers: []
})
export class CustomPipesModule {}
