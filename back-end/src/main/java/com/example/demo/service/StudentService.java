package com.example.demo.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Attendance;
import com.example.demo.entity.Student;
import com.example.demo.entity.StudentAttendance;
//import com.example.demo.entity.User;
import com.example.demo.repo.AttendanceRepo;
import com.example.demo.repo.StudentAttendanceRepo;
import com.example.demo.repo.StudentRepo;
import com.example.demo.repo.UserRepo;




@Service
public class StudentService {

	@Autowired
	private AttendanceRepo attendanceRepo;
	
	
	public Attendance readAttendance(Long id) {
		return attendanceRepo.findById(id).orElse(null);
	}

@Autowired
private StudentRepo studentRepo;

	public Student saveStudents(Student student) {
		return studentRepo.save(student);
	}
	public Student saveNewStudents(Student student) {
		student.setSubject_Id("CS101");
		student.setSemester("1");
		return studentRepo.save(student);
	}

	public List<Student> getStudents(){
		return studentRepo.findAll();
	}
	@Autowired
	private StudentAttendanceRepo studentattendanceRepo;
	
	@Autowired
	public UserRepo userRepo;
	
	 public StudentAttendance saveStudentAttendance(StudentAttendance studentattendance) {
		 
		 return studentattendanceRepo.save(studentattendance);
	 }

	 public List<StudentAttendance> getStudentAttendance(){
		 return studentattendanceRepo.findAll();
	 }
	 
	 public Student fetchByEmail(String email) {
		 return studentRepo.findByEmail(email);
	 }
	 
	 public Student updateStudents(Student student,Long id) {
			Student exisitingStudent=studentRepo.findById(id).orElse(null);
			exisitingStudent.setName(student.getName());
			exisitingStudent.setAddress(student.getAddress());
			exisitingStudent.setCourse(student.getCourse());
//			exisitingStudent.setDob(student.getDob());
			exisitingStudent.setSemester(student.getSemester());
			exisitingStudent.setSession(student.getSession());
			return studentRepo.save(exisitingStudent);
	 }
	 
}
