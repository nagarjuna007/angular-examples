import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-users.component.html'
})
export class InActiveUserComponent implements OnInit {
  users: string[];

  constructor(private usersService: UsersService) {

  }
  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
  }
  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }

}
