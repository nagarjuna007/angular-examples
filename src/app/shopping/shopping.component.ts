import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AuthService } from "../auth/auth.service";
import { LoggingService } from "../logging.service";
import * as fromApp from "../store/app.reducer";
import * as AuthActions from "../auth/store/auth.actions";

@Component({
  selector: "my-shopping",
  templateUrl: "./shopping.component.html"
})
export class ShoppingComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private loggingService: LoggingService,
    private store: Store<fromApp.AppState>
  ) {}
  ngOnInit() {
    // this.authService.autoLogin();
    this.store.dispatch(new AuthActions.AutoLogin());
    this.loggingService.printlog("Hello from AppComponent");
  }
}
