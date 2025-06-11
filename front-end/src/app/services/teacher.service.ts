import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http:HttpClient) { }
  teachers()
  {
    let url="http://localhost:8080/GetTeacher";
    return this.http.get(url);
  }
  saveTeachers(data:any)
  {
    let url="http://localhost:8080/addTeacher";
    return this.http.post(url,data);
  }
  updateTeachers(data:any)
  {
    let url="http://localhost:8080/updateTeacher/";
    return this.http.put(url,data);
  }
  // loginTeacher(loginData:any):Observable<any>{

  //   let url="http://localhost:8080/teacherLogin";
  //   return this.http.post(url,loginData);
  // }
  deleteTeachers(data:any)
  {
    let url="http://localhost:8080/dltTeacher/";
    return this.http.delete(url=data)
  }
}

