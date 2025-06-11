import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  

  constructor(private http:HttpClient) { }
  attendance()
  {
    let url="http://localhost:8080/displayattemdance";
    return this.http.get(url);
  }
  postAttendances(data:any)
  {
    let url="http://localhost:8080/addAttendancebyAdmin";
    return this.http.post(url,data);
  }
  // updateAttendances(data:any){
  //   let url="http://localhost:8080/teacherupdateAttendance/";
  //   return this.http.put(url,data);
  // }
  addAttendance(data:any){
    const headers = { 'Content-Type': 'application/json' };
    console.log("Calling...."+ data)
    let url="http://localhost:8080/teacheraddAttendance";
    return this.http.post(url,data,{headers});
  }

}
