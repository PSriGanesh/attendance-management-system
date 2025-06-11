import { Component } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';
interface StudentReport {
  id: number;
  name: string;
  session: string;
  semester: string;
  course: string;
  subjectReports: { subject: string; attendance: string; grade: string }[];
}

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {
  // Sample data for students
  constructor(private reportService: ReportService){}
  idList: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,17,18,19,20] 
  students: StudentReport[] = [
    {
      id: 101,
      name: 'Alice',
      session: '2024-25',
      semester: '1',
      course: 'Computer Science',
      subjectReports: [
        { subject: 'Mathematics', attendance: '95%', grade: 'A' },
        { subject: 'Physics', attendance: '90%', grade: 'B' }
      ]
    },
    {
      id: 102,
      name: 'Bob',
      session: '2024-25',
      semester: '1',
      course: 'Mathematics',
      subjectReports: [
        { subject: 'Mathematics', attendance: '88%', grade: 'B+' },
        { subject: 'Statistics', attendance: '92%', grade: 'A-' }
      ]
    }
    // Add more students as needed
  ];
  subjectReports: any[]=[]
  selectedRollNumber: number=0
  subjects= ['CS101','CS102','CS103']
  // Method to retrieve student report based on roll number
  viewReport(): void {
    // Ensure selectedRollNumber is treated as a number
    this.selectedRollNumber = this.selectedRollNumber ? parseInt(this.selectedRollNumber.toString(), 10) : 0;
    console.log('Selected Roll Number:', this.selectedRollNumber);

    // this.selectedStudent = this.students.find(student => student.id === this.selectedRollNumber) || 0;
    // console.log('Selected Student:', this.selectedStudent);
    this.subjectReports=[]
    this.subjects.forEach(i=>{
      this.reportService.getAttendance(i,this.selectedRollNumber).subscribe(data=>{
        this.subjectReports.push({'subject': i,'attendance': data+"%"})
      })
    })

  }
}
