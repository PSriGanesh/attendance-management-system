package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Attendance;
import com.example.demo.entity.StudentAttendance;
import com.example.demo.repo.AttendanceRepo;
import com.example.demo.repo.StudentAttendanceRepo;
import com.example.demo.repo.StudentRepo;

@Service
public class ReportService {
	@Autowired
	private AttendanceRepo attendanceRepo;
	@Autowired
	private StudentAttendanceRepo studentAttendanceRepo;
	@Autowired
	private StudentRepo studentRepo;
	
	public double getPercentage(String courseId,Long id) {
		List<Attendance> total=attendanceRepo.findBySubjectId(courseId);
		List<Long> att_ids = new ArrayList<>();
		for(Attendance i:total)
			att_ids.add(i.getId());
		int present=0;
		List<StudentAttendance> temp;
		for(Long i: att_ids) {
			temp=studentAttendanceRepo.findByAttendanceID(i);
			for(StudentAttendance j: temp)
				if(j.getStudentId()==id && j.getMarkattendanc().equalsIgnoreCase("Present"))
					present++;
		}
		System.out.println("Present: "+present);
		System.out.println("Total: "+total.size());
		if(total.size()==0)
			return 0;
		return Math.round((double)present/total.size()*100);
	}
}
