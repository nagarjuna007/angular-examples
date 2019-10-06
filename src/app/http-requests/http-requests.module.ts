import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { HttpRequestComponent } from "./http-requests.component";
import { HttpHeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { AuthInterceptorService } from "./auth.interceptor.service";
import {LoggingInterceptorService} from './logging.interceptor.service';

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
  declarations: [HttpRequestComponent, HttpHeaderComponent, HomeComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptorService,
      multi: true
    }
  ]
})
export class HttpRequestModule {}
