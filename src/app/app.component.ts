import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
   sideBar = 'text';

   toggle() {
    if (this.sideBar) {
      this.sideBar = null;
    } else {
      this.sideBar = 'text';
    }
  }
}

// https://www.freelogoservices.com
