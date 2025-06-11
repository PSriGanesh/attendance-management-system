import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../classes/Student';
import { User } from '../classes/User'; // Assuming User interface is shared for both students and teachers
import { Teacher } from '../classes/Teacher';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) {}

  // Student-related methods
  students() {
    let url = "http://localhost:8080/Getstudent";
    return this.http.get<Student[]>(url);
  }

  postStudents(data: any) {
    let url = "http://localhost:8080/addstudent";
    return this.http.post(url, data);
  }

  loginStudent(loginData: any): Observable<any> {
    let url = "http://localhost:8080/studentLogin";
    return this.http.post<boolean>(url, loginData);
  }

  getStudentDetails(studEmail: any) {
    let url = "http://localhost:8080/getstudentdetails";
    const params = new HttpParams().set('email', studEmail);
    return this.http.get<Student>(url, { params });
  }

  // Teacher-related methods
  teachers() {
    let url = "http://localhost:8080/GetTeacher";
    return this.http.get<User[]>(url); // Assuming `User` is used for teachers as well
  }

  postTeachers(data: any) {
    let url = "http://localhost:8080/addteacher";
    return this.http.post(url, data);
  }

    loginTeacher(loginData: any): Observable<any> {
    let url = "http://localhost:8080/teacherLogin";
    return this.http.post<boolean>(url, loginData);
  }

  getTeacherDetails(teacherEmail: any) {
    let url = "http://localhost:8080/getteacherdetails";
    const params = new HttpParams().set('email', teacherEmail);
    return this.http.get<Teacher>(url, { params });
  }
}
