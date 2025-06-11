import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.scss']
})
export class StudentLoginComponent implements OnInit {

constructor(private userDataService:UserDataService, private router: Router){}
userLogin(loginData:any){
  this.userDataService.loginStudent(loginData).subscribe(
    (response: boolean) => {
      if (response){
        this.router.navigate(['..//students/dashboard']);
        localStorage.setItem("email",loginData.email);
      }
       else 
        alert('Wrong password');
      }
  )
}

ngOnInit(): void {
  
}
}
