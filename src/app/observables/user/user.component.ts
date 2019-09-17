import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-observables-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }
  onActivate() {
    // this.userService.activatedEmitter.emit(true);
    this.userService.activatedEmitter.next(true);
  }
}