import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { LoggingService } from "../logging.service";

@Component({
  selector: "my-shopping",
  templateUrl: "./shopping.component.html"
})
export class ShoppingComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private loggingService: LoggingService
  ) {}
  ngOnInit() {
    this.authService.autoLogin();
    this.loggingService.printlog("Hello from AppComponent");
  }
}
