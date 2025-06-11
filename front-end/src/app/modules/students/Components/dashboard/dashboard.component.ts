import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/classes/Student';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  {
  student:Student = {
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

  constructor(private router: Router,private userDataService:UserDataService) {}

  goToUpdateDetails() {
    this.router.navigate(['/students/updatedetails']); // Adjust path as needed
  }

  goToViewReport() {
    this.router.navigate(['/students/report']); // Adjust path as needed
  }
  ngOnInit(){
    this.userDataService.getStudentDetails(localStorage.getItem("email")).subscribe(data=>{
      this.student=data
      let s=JSON.stringify(data)
      localStorage.setItem("student",s);
    })
  }
}
