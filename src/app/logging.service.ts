import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable()
export class LoggingService {
  lastlog: string;
  printlog(message: string) {
    console.log(message);
    this.lastlog=message;
  }
}
