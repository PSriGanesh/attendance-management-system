import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { ReportComponent } from './Components/report/report.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { UploadComponent } from './Components/upload/upload.component';
import { TeacherDashboardComponent } from './Components/teacher-dashboard/teacher-dashboard.component';
import { AttendanceComponent } from './Components/attendance/attendance.component';
import { UpdateTeacherComponent } from './Components/updateteacher/updateteacher.component';
import { UpdateAttendanceComponent } from './Components/updateattendance/updateattendance.component';
import { StudentsRoutingModule } from '../students/students-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReportComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    UploadComponent,
    TeacherDashboardComponent,
    AttendanceComponent,
    UpdateTeacherComponent,
    UpdateAttendanceComponent,
  
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule, CommonModule,CommonModule,
  StudentsRoutingModule,HttpClientModule ,FormsModule
  ]
})
export class TeacherModule { }
