import { Component } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { AttendanceService } from 'src/app/services/attendance.service';
import { CourseService } from 'src/app/services/course.service';
import { Student } from 'src/app/classes/Student';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {

  constructor(private userDataService: UserDataService,
    private attendanceService:AttendanceService,
    private courseService:CourseService,
  ){}

  
  // Sample data for courses and subject IDs
  courses = ['Computer Science', 'Mathematics', 'Physics'];
  subjects = [
    { courseId: 'CS101', courseName: 'Computer Science' },
    { courseId: 'CS102', courseName: 'Mathematics' },
    { courseId: 'CS103', courseName: 'Physics' }
  ];

  selectedCourse: string | null = null;
  selectedSubjectId: string | null = null;
  selectedDate: string | null = null; // Add selectedDate property

  // Sample data for students
  allStudents: Student[] = [
    // { id: 1, name: 'Alice', session: '2024-25', semester: '1', subject_Id: 'CS101', course: 'Computer Science', status: 'Absent' },
    // { id: 2, name: 'Bob', session: '2024-25', semester: '1', subject_Id: 'CS102', course: 'Mathematics', status: 'Absent' },
    // { id: 3, name: 'Charlie', session: '2024-25', semester: '1', subject_Id: 'CS103', course: 'Physics', status: 'Absent' },
    // { id: 4, name: 'Dave', session: '2024-25', semester: '1', subject_Id: 'CS101', course: 'Computer Science', status: 'Absent' }
  ];

  filteredStudents: Student[] = [];

  ngOnInit(){
    this.getAllStudents()
    this.getAllCourses()
  }

  getAllCourses():void {
    this.courseService.getCourses().subscribe(data=>{
      this.subjects=data
      console.log(this.subjects)
    })

  }

  getAllStudents(): void {
    this.userDataService.students().subscribe(data=>{
        this.allStudents=data;
        console.log(this.allStudents);
    });
  }
  // Filter students based on selected course, subject, and date
  filterStudentData(): void {
    console.log("Filtering...." +this.selectedCourse+" "+this.selectedSubjectId)
    console.log(this.allStudents)
    this.filteredStudents = this.allStudents.filter(student =>
      // {
      // console.log(student.course)
      // }
      // student.course === this.selectedCourse &&
      student.subject_Id === this.selectedSubjectId
    );
    console.log(this.selectedSubjectId)
    console.log(this.filteredStudents)
    this.filteredStudents.forEach(student=>{
      student.status="Absent"
    })
  }

  // Update student attendance status
  updateStatus(studentId: number, status: string): void {
    const student = this.filteredStudents.find(stud => stud.id === studentId);
    if (student) {
      student.status = status;
    }
  }

  clearStudentData(){
    this.filteredStudents=[]
  }

  // Save attendance with selected date
  saveAttendance(): void {
    if (!this.selectedDate) {
      alert("Please select a date before saving attendance.");
      return;
    }
    const attendanceData = {
      date: this.selectedDate,
      course: this.selectedCourse,
      subjectId: this.selectedSubjectId,
      studList: this.filteredStudents
    };
    // this.markAttService.addStudentAttendance(attendanceData);
    this.attendanceService.addAttendance(attendanceData).subscribe({
      next: (response) => console.log("Response from API:", response),
      error: (err) => console.error("Error from API:", err)
    });
    console.log('Final Attendance:', attendanceData);
    alert('Attendance saved successfully!');
    // Send `attendanceData` to the backend here.
  }
}
