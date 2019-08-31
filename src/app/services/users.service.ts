import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CounterService } from './counter.service';

@Injectable()
export class UsersService {
  activeUsers = ['Nagarjuna', 'Tamarada'];
  inactiveUsers = ['dura', 'rao'];

  constructor(private counterService: CounterService) { }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementInactiveToactive();
  }
  setToInActive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementactiveToInactive();
  }

}