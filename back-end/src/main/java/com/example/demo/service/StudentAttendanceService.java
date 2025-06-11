package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Student;
import com.example.demo.entity.StudentAttendance;
import com.example.demo.repo.StudentAttendanceRepo;

@Service
public class StudentAttendanceService {
	
	@Autowired
	private StudentAttendanceRepo studentattendanceRepo;

	public void saveStudentAttendance(List<Student> studList,Long attId) {
		for(Student i: studList) {
			StudentAttendance studentAttendanceObj = new StudentAttendance();
			studentAttendanceObj.setAttendanceID(attId);
			studentAttendanceObj.setMarkattendanc(i.getStatus());
			studentAttendanceObj.setStudentId(i.getId());
			studentattendanceRepo.save(studentAttendanceObj);
		}
		
		//		return studentattendanceRepo.save(studentattendance);
	 }

	 public List<StudentAttendance> getStudentAttendance(){
		 return studentattendanceRepo.findAll();
	 }
	
}
