import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-odd',
  templateUrl: './odd.component.html'
})
export class OddComponent {
  @Input() number: number;

}
