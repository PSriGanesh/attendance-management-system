package com.example.demo.startup;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.demo.entity.Student;
import com.example.demo.service.ReportService;
import com.example.demo.service.StudentService;

@Component
public class StudentCommandlineRunner implements CommandLineRunner {

	@Autowired
	private StudentService studentService;
	
	@Autowired
	private ReportService reportService;

	@Override
	public void run(String... args) throws Exception {
		 studentService.saveStudents(createStudent("Alice","CS101","CSE"));
		 studentService.saveStudents(createStudent("Alice","CS102","CSE"));
		 studentService.saveStudents(createStudent("Alice","CS103","CSE"));
		 studentService.saveStudents(createStudent("Bob","CS101","ECE"));
		 studentService.saveStudents(createStudent("Bob","CS102","ECE"));
		 studentService.saveStudents(createStudent("Bob","CS103","ECE"));
		 studentService.saveStudents(createStudent("Carl","CS101","EEE"));
		 studentService.saveStudents(createStudent("Carl","CS102","EEE"));
		 studentService.saveStudents(createStudent("Carl","CS103","EEE"));
		 studentService.saveStudents(createStudent("Derek","CS101","Mechanical"));
		 studentService.saveStudents(createStudent("Derek","CS102","Mechanical"));
		 studentService.saveStudents(createStudent("Derek","CS103","Mechanical"));
		 
//		 reportService.getPercentage("CS101", 1L);
		
	}

	private Student createStudent(String name,String subj_id,String course) {
		Student student = new Student();
		 student.setAddress("home");
		 student.setName(name);
		 student.setCourse(course);
		 student.setSession("2021-2025");
		 student.setSemester("1");
		 student.setSubject_Id(subj_id);
		 student.setDob("2024-01-01");
		return student;
	}
	
}
