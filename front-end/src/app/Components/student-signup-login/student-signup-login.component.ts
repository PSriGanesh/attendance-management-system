import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup-login.component.html',
  styleUrls: ['./student-signup-login.component.scss'],
})
export class StudentSignupLoginComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private userDataService: UserDataService) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      contact_Number: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{10,12}$/)]],
    });
  }

  get f() {
    return this.signupForm.controls;
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      console.warn('Form is invalid');
      return;
    }
    console.warn('Student Signup Data:', this.signupForm.value);
    this.userDataService.postStudents(this.signupForm.value).subscribe((response) => {
      console.log('Signup Successful', response);
      alert('Signup Successful!')
    });
  }
}
