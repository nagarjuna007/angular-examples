import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html'
})
export class ObservablesComponent implements OnInit, OnDestroy {
  userActivated = false;
  private activatedSub: Subscription;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.activatedSub = this.userService.activatedEmitter.subscribe(didActivate => {
      this.userActivated = didActivate;
    })
  }
  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }
}
