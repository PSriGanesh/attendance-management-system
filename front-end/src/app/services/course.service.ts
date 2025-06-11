import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../classes/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http:HttpClient) { }


  getCourses()
  {
    let url="http://localhost:8080/getcourses";
    return this.http.get<Course []>(url);
  }


}
