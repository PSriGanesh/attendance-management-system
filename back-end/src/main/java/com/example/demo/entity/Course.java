package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "course")
public class Course {
	@Id
	private String courseId;
	private String courseName;
	
	
	public Course() {
		super();
	}
	public Course(String courseId, String courseName) {
		super();
		this.courseId = courseId;
		this.courseName = courseName;
	}
	public String getCourseId() {
		return courseId;
	}
	public void setCourseId(String courseId) {
		this.courseId = courseId;
	}
	public String getCourseName() {
		return courseName;
	}
	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}
	
}
