import { Component } from '@angular/core';

@Component({
  selector: 'app-updateteacher',
  templateUrl: './updateteacher.component.html',
  styleUrls: ['./updateteacher.component.scss']
})
export class UpdateTeacherComponent {
  // Current teacher details with default values
  teacher = {
    id: 'T123',                    // Current Teacher ID
    name: 'John Doe',               // Current Name
    email: 'johndoe@example.com',    // Current Email
    department: 'Computer Science',  // Current Department
    phone: '123-456-7890'            // Current Phone Number
  };

  // Method to handle form submission
  updateTeacherDetails(): void {
    console.log('Updated Teacher Details:', this.teacher);
    alert('Teacher details updated successfully!');
    // Here you would typically send the data to the backend server
  }
}
