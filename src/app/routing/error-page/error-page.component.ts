import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html'
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;
  constructor(private activatedRoute: ActivatedRoute) {

  }
  ngOnInit() {
    // this.errorMessage = this.activatedRoute.snapshot.data['message'];
    this.activatedRoute.data.subscribe(
      (data: Data) => {
        this.errorMessage = data['message'];
      }
    );
  }
}
