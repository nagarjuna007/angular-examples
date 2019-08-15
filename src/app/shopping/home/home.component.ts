import { Component } from '@angular/core';

@Component({
  selector: 'my-Shopping-home',
  templateUrl: './home.component.html'
})
export class ShoppingHomeComponent {
  loadedFeature = 'recipe';
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
