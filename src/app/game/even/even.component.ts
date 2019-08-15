import { Component,Input } from '@angular/core';

@Component({
  selector: 'my-even',
  templateUrl: './even.component.html'
})
export class EvenComponent  {
  @Input() number: number;
}
