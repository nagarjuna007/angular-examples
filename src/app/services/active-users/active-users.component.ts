import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-users.component.html'
})
export class ActiveUserComponent implements OnInit {
  users: string[];

  constructor(private usersService: UsersService) {

  }
  ngOnInit() {
    this.users = this.usersService.activeUsers;
  }
  onSetToInactive(id: number) {
    this.usersService.setToInActive(id);
  }
}
