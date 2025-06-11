import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';
import { Student } from 'src/app/classes/Student';
import { Teacher } from 'src/app/classes/Teacher';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // Mock teacher details
  teacher:Teacher = {
    name: 'Jane Doe',
    id: 101,
    course: 'Computer Science',
    email: 'janedoe@example.com',
    session: '',
    semester: '',
    subject_Id: '',
    status: '',
    contact_Number: 0
  };
  constructor(private router: Router, private userDataService: UserDataService) {}

  // Navigation methods with absolute paths
  goToUpdateAttendance() {
    this.router.navigate(['/teacher/updateattendance']);
  }

  goToUpdateTeacher() {
    this.router.navigate(['/teacher/updateteacher']);
  }

  goToUpload() {
    this.router.navigate(['/teacher/upload']);
  }

  goToReport() {
    this.router.navigate(['/teacher/report']);
  }

  ngOnInit(){
    this.userDataService.getTeacherDetails(localStorage.getItem("email")).subscribe(data=>{
      this.teacher=data
      let s=JSON.stringify(data)
      localStorage.setItem("teacher",s);
    })
  }
}
