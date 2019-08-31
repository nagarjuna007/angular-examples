import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToactiveCounter = 0;

  incrementactiveToInactive() {
    this.activeToInactiveCounter++;
    console.log('Active To Inactive: ' + this.activeToInactiveCounter);
  }
  incrementInactiveToactive() {
    this.inactiveToactiveCounter++;
    console.log('InActive To active: ' + this.inactiveToactiveCounter);
  }
}