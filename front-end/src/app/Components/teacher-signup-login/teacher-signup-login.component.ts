import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-teacher-signup-login',
  templateUrl: './teacher-signup-login.component.html',
  styleUrls: ['./teacher-signup-login.component.scss'],
})
export class TeacherSignupLoginComponent {
  title = 'Attendance_Management_System';
  teachers: any;
  signupForm: FormGroup;
  name: any;

  constructor(private userDataService: UserDataService, private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      contact_Number: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{10,12}$/)]],
    });

    this.userDataService.teachers().subscribe((data) => {
      this.teachers = data;
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
    console.warn('Form Submitted:', this.signupForm.value);
    this.userDataService.postTeachers(this.signupForm.value).subscribe((teacherData) => {
      console.warn(teacherData);
      alert('Signup Successful!')
    });
  }
}
