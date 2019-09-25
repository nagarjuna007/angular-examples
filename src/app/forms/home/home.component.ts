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
  answer = "";
  genders = ['male', 'female'];
  submitted = false;
  user = {
    username: '',
    email: '',
    secretQustion: '',
    answer: '',
    gender: ''
  };

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signUpForm.setValue({
    //   userData:{
    //     username:suggestedName,
    //     email:''
    //   },
    //   secret:'pet',
    //   questionAnswer:'',
    //   gender:'male'
    // });
    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }
  // onSubmit(form: ngForm) {
  //   console.log(form)
  // }
  onSubmit() {
    this.submitted = true;
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secretQustion = this.signUpForm.value.userData.secret;
    this.user.answer = this.signUpForm.value.userData.questionAnswer;
    this.user.gender = this.signUpForm.value.userData.gender;

    this.signUpForm.reset();
  }
}
