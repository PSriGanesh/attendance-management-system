import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherSignupLoginService {

  constructor(private http:HttpClient) { }
  teachers()
  {
    let url="http://localhost:8080/GetTeacher";
    return this.http.get(url);
  }
  postTeachers(data:any)
  {
    let url="http://localhost:8080/addTeacher";
    return this.http.post(url,data);
  }
}
