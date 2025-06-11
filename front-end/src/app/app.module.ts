import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';


import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentSignupLoginComponent } from './Components/student-signup-login/student-signup-login.component';

import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { StudentLoginComponent } from './Components/student-login/student-login.component';
import { TeacherLoginComponent } from './Components/teacher-login/teacher-login.component';
import { TeacherSignupLoginComponent } from './Components/teacher-signup-login/teacher-signup-login.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    
    ForgetPasswordComponent,
    
    StudentSignupLoginComponent,
    HeaderComponent,
    FooterComponent,
    StudentLoginComponent,
    TeacherLoginComponent,
    TeacherSignupLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,HttpClientModule,FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
