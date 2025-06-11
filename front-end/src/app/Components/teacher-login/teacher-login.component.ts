import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.scss']
})
export class TeacherLoginComponent implements OnInit {

  constructor(private userDataService: UserDataService, private router: Router) {}

  teacherLogin(loginData: any) {
    this.userDataService.loginTeacher(loginData).subscribe(
      (response: boolean) => {
        console.log(response)
        if (response) {
          this.router.navigate(['../teacher/dashboard']); // Redirect to teacher dashboard
          localStorage.setItem("email", loginData.email); // Store teacher email in local storage
        } else {
          alert('Wrong password'); // Display an alert for incorrect login
        }
      }
    );
  }

  ngOnInit(): void {}
}
