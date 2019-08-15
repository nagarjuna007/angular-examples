import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-home',
  templateUrl: './game-home.component.html'
})
export class GameHomeComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }
}
