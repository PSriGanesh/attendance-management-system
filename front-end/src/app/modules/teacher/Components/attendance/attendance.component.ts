import { Component } from '@angular/core';
import { AttendanceService } from 'src/app/services/attendance.service';


@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent {

  title = 'Attendance_Management_System';
  attendances:any;
  constructor(private attendanceData:AttendanceService){
    this.attendanceData.attendance().subscribe((data)=>{
      this.attendances=data;
    });
    
  }
  getAttendanceFromData(data:any){
    console.warn(data)
    this.attendanceData.postAttendances(data).subscribe((attendancedata)=>{
    console.warn(attendancedata);
      
    })
  }
}
