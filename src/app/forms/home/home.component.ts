import { Component, ElementRef, ViewChild } from '@angular/core';
import { ngForm } from '@angular/forms';

@Component({
  selector: 'app-forms-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('f') signUpForm: ngForm;
  defaultQustion = "pet";

  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  // onSubmit(form: ngForm) {
  //   console.log(form)
  // }
  onSubmit() {
    console.log(this.signUpForm)
  }
}
