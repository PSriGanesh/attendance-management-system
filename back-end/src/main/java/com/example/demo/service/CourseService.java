package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Course;
import com.example.demo.repo.CourseRepo;

@Service
public class CourseService {
	
	@Autowired
	private CourseRepo courseRepo;

	public List<Course> getCourses(){
		return courseRepo.findAll();
	}
	
}
