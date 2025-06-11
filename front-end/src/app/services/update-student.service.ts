import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../classes/Student';

@Injectable({
  providedIn: 'root'
})
export class UpdateStudentService {

  constructor(private http:HttpClient) { }
  // students()
  // {
  //   let url="http://localhost:8080/Getstudent";
  //   return this.http.get(url);
  // }
  // saveStudents(data:any)
  // {
  //   let url="http://localhost:8080/addstudent";
  //   return this.http.post(url,data);
  // }
  updateStudents(student:Student,id:Number){
    let url=`http://localhost:8080/updateStudent/${id}`;
    return this.http.put(url,student);
  }
  

}
