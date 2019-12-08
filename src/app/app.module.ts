import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { WarningAlertComponent } from "./alerts/warning-alert/warning-alert.component";
import { SuccessAlertComponent } from "./alerts/success-alert/success-alert.component";
import { RouterModule } from "@angular/router";
import { GameModule } from "./game/game.module";
import { ServicesModule } from "./services/services.module";
import { SiteMapComponent } from "./site-map/site-map.component";
import { ServerModule } from "./server-module/server.module";
import { ShoppingModule } from "./shopping/shopping.module";
import { ExamplesModule } from "./examples/examples.module";
import { DropdownDirective } from "./shared/dropdown.directive";
import { CustomNavModule } from "./routing/custom-nav.module";
import { NoDataFoundComponent } from "./routing/page-not-found/page-not-found.component";
import { ErrorPageComponent } from "./routing/error-page/error-page.component";
import { ObservablesModule } from "./observables/observables.module";
import { CustomFormsModule } from "./forms/forms.module";
import { CustomPipesModule } from "./pipes/custom-pipes.module";
import { HttpRequestModule } from "./http-requests/http-requests.module";
import {AnimationsModule} from "./animations/animations.module";
import {OfflineModule} from "./offline/offline.module";
import { PostComponent } from "./offline/post/post.component";

@NgModule({
  imports: [
    //AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GameModule,
    ServerModule,
    ShoppingModule,
    CustomNavModule,
    CustomPipesModule,
    ExamplesModule,
    ServicesModule,
    ObservablesModule,
    CustomFormsModule,
    HttpRequestModule,
    AnimationsModule,
    OfflineModule,
    RouterModule.forRoot([
      { path: "", component: SiteMapComponent },
      {
        path: "not-found",
        component: ErrorPageComponent,
        data: { message: "Page not Found..?" }
      },
      //{ path: 'not-found', component: NoDataFoundComponent },
      { path: "**", redirectTo: "/not-found" }
    ])
  ],
  declarations: [
    AppComponent,
    WarningAlertComponent,
    NoDataFoundComponent,
    SuccessAlertComponent,
    SiteMapComponent,
    DropdownDirective,
    ErrorPageComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
