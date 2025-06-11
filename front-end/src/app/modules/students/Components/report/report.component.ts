import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';

interface SubjectRecord {
  subject: string;
  attendance: number;
  grade: string;
}

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  student2 = {
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    course: 'Computer Science',
    phone: '123-456-7890',
    rollno:1,
    subjects: [
      { subject: 'CS101', attendance: 95,},
      { subject: 'CS102', attendance: 89, },
      { subject: 'CS103', attendance: 92, },
    ] as SubjectRecord[]
  };
  subjects = [
    { subject: 'CS101', attendance: 95,},
    { subject: 'CS102', attendance: 89, },
    { subject: 'CS103', attendance: 92, },
  ] as SubjectRecord[]
  
  student:any=(localStorage.getItem("student")!=null)?localStorage.getItem("student"):null
  

  // student2=JSON.parse(localStorage.getItem("student"))
  constructor(private reportService:ReportService) {}

  ngOnInit(): void {
    this.student=JSON.parse(this.student)
    console.log(this.student)
    this.subjects.forEach(i=>{
      this.reportService.getAttendance(i.subject,this.student.id).subscribe(data=>{
        i.attendance=data;
      })
    })
  }
}
