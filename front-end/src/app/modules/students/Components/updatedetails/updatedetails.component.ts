import { Component } from '@angular/core';
import { UpdateStudentService } from 'src/app/services/update-student.service';
import { Student } from 'src/app/classes/Student';
@Component({
  selector: 'app-updatedetails',
  templateUrl: './updatedetails.component.html',
  styleUrls: ['./updatedetails.component.scss']
})
export class UpdateDetailsComponent {
  // Mock student data
  // student:Student = {
  //   name: 'Alice Johnson',
  //   email: 'alice.johnson@example.com',
  //   course: 'Computer Science',
  //   contact_Number: 1234567890,

  // };

  constructor(private updateStudentService: UpdateStudentService){}

  student:Student = {
    name: 'Jane Doe',
    id: 101,
    course: 'Computer Science',
    email: 'janedoe@example.com',
    session: '',
    semester: '1',
    subject_Id: '',
    status: '',
    contact_Number: 123456789
  };

  studentloaded:any=(localStorage.getItem("student")!=null)?localStorage.getItem("student"):null

  // Method to handle form submission
  updateStudentDetails() {
    console.log('Student details updated:', this.student);
    this.updateStudentService.updateStudents(this.student,this.student.id).subscribe(data=>{
      console.log(data)
    })
  }

  ngOnInit(){
    this.studentloaded=JSON.parse(this.studentloaded)
    this.student.name=this.studentloaded.name
    this.student.id=this.studentloaded.id
    this.student.contact_Number=this.studentloaded.contact_Number
    this.student.email=this.studentloaded.email
  }
}
