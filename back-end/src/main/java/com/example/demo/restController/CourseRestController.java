package com.example.demo.restController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Course;
import com.example.demo.service.CourseService;

@RestController
@CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
public class CourseRestController {

	@Autowired
	private CourseService courseService;
	
	@GetMapping("/getcourses")
	public List<Course> getCourses(){
		return courseService.getCourses();
	}
	
}
