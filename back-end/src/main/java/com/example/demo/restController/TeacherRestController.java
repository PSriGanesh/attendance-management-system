package com.example.demo.restController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Attendance;
import com.example.demo.entity.Student;
import com.example.demo.entity.Teacher;
import com.example.demo.entity.User;
import com.example.demo.repo.AttendanceRepo;
import com.example.demo.repo.TeacherLoginRepo;
import com.example.demo.repo.UserRepo;
import com.example.demo.service.StudentAttendanceService;
//import com.example.demo.entity.Teacher;
//import com.example.demo.entity.User;
//import com.example.demo.repo.UserRepo;
//import com.example.demo.entity.Teacher;
import com.example.demo.service.TeacherService;

@RestController
@CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
public class TeacherRestController {
	
	@Autowired
	private TeacherService teacherService;
	@Autowired
	private StudentAttendanceService studentAttendanceService;
	@Autowired
	private TeacherLoginRepo teacherLoginRepo;
	@Autowired
	private AttendanceRepo attendanceRepo;
	@Autowired
	private UserRepo userRepo;
	
	@PostMapping("/addteacher")
	@CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
	public Teacher addTeacher(@RequestBody Teacher teacher) {
		
		Teacher savedTeacher= teacherService.saveNewTeacher(teacher);
		User user=new User();
		
		user.setName(savedTeacher.getName());
		user.setEmail(savedTeacher.getEmail());
		user.setContact_Number(savedTeacher.getContact_Number());
		user.setPassword(savedTeacher.getPassword());
		user.setUserType("User");
		userRepo.save(user);
		return teacherService.saveNewTeacher(teacher);
		
	}
	@GetMapping("/GetTeacher")
	@CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
	public List<Teacher>showTeachers(){
		return teacherService.getTeachers();
	}
	
	@DeleteMapping("/deletestudent/{id}")
	public String deletestudent(@PathVariable Long id) {
		System.out.println("Calling: delete Student");
		return teacherService.deleteStudent(id);
	}
	@GetMapping("/findAllStudent")
	public List<Student> findeAllStudent() {
		System.out.println("Calling: find Teacher");
		return teacherService.getStudent();
	}
	
	@GetMapping("/getteacherdetails")
	@CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
	public Teacher getTeacherDetails(@RequestParam String email) {
		return teacherService.findByEmailId(email);
	}
	
	@PutMapping("/teacherupdateStudent/{id}")
	@CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
	public Student updateStudents(@RequestBody Student student) {
		return teacherService.updateStudents(student);
	}
	
	@PutMapping("/teacherupdateAttendance/{id}")
	@CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
	public Attendance updateAttendances(@RequestBody Attendance attendance) {
		attendance.setTakeAttendance("Present");
		attendanceRepo.save(attendance);
		
		return teacherService.updateAttendance(attendance);
		

	}
	
	//MY code
	
	@PostMapping("/teacheraddAttendance")
	@CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
	public void addAttendance(@RequestBody Attendance attendance) {
		System.out.println("Called");
		System.out.println(attendance.toString());
		attendanceRepo.save(attendance);
		studentAttendanceService.saveStudentAttendance(attendance.getStudList(), attendance.getId());
		
		
	}
	
}

