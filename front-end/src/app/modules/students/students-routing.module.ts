import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { StudentsDashboardComponent } from './Components/students-dashboard/students-dashboard.component';
import { UpdateDetailsComponent } from './Components/updatedetails/updatedetails.component';
import { ReportComponent } from './Components/report/report.component';

const routes: Routes = [
  {path: '',component:StudentsDashboardComponent, children:[

    {path:'dashboard',component:DashboardComponent},
    {path:'updatedetails',component:UpdateDetailsComponent},
    {path:'report',component:ReportComponent}
    
  
]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
