import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'my-game-control',
  templateUrl: './game-control.component.html'
})
export class GameControlComponent {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }
  onPauseGame() {
    clearInterval(this.interval);
  }
}
