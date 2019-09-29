import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { HttpRequestComponent } from "./http-requests.component";
import { HttpHeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "http",
        component: HttpRequestComponent,
        children: [{ path: "", component: HomeComponent }]
      }
    ])
  ],
  declarations: [
    HttpRequestComponent,
    HttpHeaderComponent,
    HomeComponent
  ],
  providers: []
})
export class HttpRequestModule {}
