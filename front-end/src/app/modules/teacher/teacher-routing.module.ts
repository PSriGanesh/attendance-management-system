import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherDashboardComponent } from 'src/app/modules/teacher/Components/teacher-dashboard/teacher-dashboard.component';
import { AttendanceComponent } from './Components/attendance/attendance.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ReportComponent } from './Components/report/report.component';
import { UpdateAttendanceComponent } from './Components/updateattendance/updateattendance.component';
import { UpdateTeacherComponent } from './Components/updateteacher/updateteacher.component';
import { UploadComponent } from './Components/upload/upload.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherDashboardComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'upload', component: UploadComponent },
      { path: 'attendance', component: AttendanceComponent },
      { path: 'report', component: ReportComponent },
      { path: 'updateteacher', component: UpdateTeacherComponent },
      { path: 'updateattendance', component: UpdateAttendanceComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' } // Default to dashboard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule {}
