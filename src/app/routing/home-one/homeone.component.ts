import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home-one',
  templateUrl: './homeone.component.html'
})
export class HomeOneComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onLoadServers() {
    this.router.navigate(['/nav/servers']);
  }

}
