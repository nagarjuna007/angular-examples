import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormsComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm: FormGroup;
  forbiddenUsernames = ['Nagarjuna', 'Tamarada'];

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email, this.forbiddenEmails])
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    this.signUpForm.valueChanges.subscribe(
      (value) => console.log(value)
    );
    this.signUpForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
    this.signUpForm.setValue({
      'userData': {
        'username': 'Nagarjuna',
        'email': 'test@test.com'
      },
      'gender': 'male',
      'hobbies': []
    });
    this.signUpForm.patchValue({
      'userData': {
        'username': 'Tamarada'
      }
    })
  }
  onSubmit() {
    console.log(this.signUpForm);
    this.signUpForm.reset();
  }
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true }
    }
    return null;
  }
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((reslove, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          reslove({ 'emailIsForbidden': true })
        } else {
          reslove(null)

        }
      }, 1500)
    });
    return promise;
  }
}
