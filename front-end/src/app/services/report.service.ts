import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http:HttpClient) { }

  getAttendance(courseid:string,studentid:number) {
    let url="http://localhost:8080/getreport/";
    return this.http.get<number>(url+courseid+"/"+studentid);
  }

}
