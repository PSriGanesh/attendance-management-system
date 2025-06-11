
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsDashboardComponent } from './Components/students-dashboard/students-dashboard.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { UpdateDetailsComponent } from './Components/updatedetails/updatedetails.component';
import { ReportComponent } from './Components/report/report.component';






@NgModule({
  declarations: [
    StudentsDashboardComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    UpdateDetailsComponent,
    ReportComponent,
    
    

  ],
  imports: [
    CommonModule,
  StudentsRoutingModule,HttpClientModule ,FormsModule
  ]
})
export class StudentsModule { }
