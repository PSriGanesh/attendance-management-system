import { Component } from '@angular/core';

interface Student {
  id: number;
  name: string;
  session: string;
  semester: string;
  subject_Id: string;
  course: string;
  date: string;
  status: string;
}

@Component({
  selector: 'app-updateattendance',
  templateUrl: './updateattendance.component.html',
  styleUrls: ['./updateattendance.component.scss']
})
export class UpdateAttendanceComponent {
  // Sample data for courses, subject IDs, and dates
  courses = ['Computer Science', 'Mathematics', 'Physics'];
  subjects = [
    { id: 'CS101', course: 'Computer Science' },
    { id: 'CS102', course: 'Mathematics' },
    { id: 'CS103', course: 'Physics' }
  ];

  dates = ['2024-10-25', '2024-10-26']; // Sample dates

  selectedCourse: string | null = null;
  selectedSubjectId: string | null = null;
  selectedDate: string | null = null;

  // Sample data for students' attendance
  allStudents: Student[] = [
    { id: 1, name: 'Alice', session: '2024-25', semester: '1', subject_Id: 'CS101', course: 'Computer Science', date: '2024-10-25', status: 'Absent' },
    { id: 2, name: 'Bob', session: '2024-25', semester: '1', subject_Id: 'CS102', course: 'Mathematics', date: '2024-10-25', status: 'Absent' },
    { id: 3, name: 'Charlie', session: '2024-25', semester: '1', subject_Id: 'CS103', course: 'Physics', date: '2024-10-26', status: 'Absent' },
    { id: 4, name: 'Dave', session: '2024-25', semester: '1', subject_Id: 'CS101', course: 'Computer Science', date: '2024-10-26', status: 'Absent' }
  ];

  filteredStudents: Student[] = [];

  // Filter students based on selected course, subject, and date
  filterStudentData(): void {
    this.filteredStudents = this.allStudents.filter(student =>
      student.course === this.selectedCourse &&
      student.subject_Id === this.selectedSubjectId &&
      student.date === this.selectedDate
    );
  }

  // Update student attendance status
  updateStatus(studentId: number, status: string): void {
    const student = this.filteredStudents.find(stud => stud.id === studentId);
    if (student) {
      student.status = status;
    }
  }

  // Save attendance
  saveAttendance(): void {
    console.log('Final Attendance:', this.filteredStudents);
    alert('Attendance saved successfully!');
  }
}
