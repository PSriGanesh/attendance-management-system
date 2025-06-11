package com.example.demo.entity;

import javax.persistence.Transient;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor


@Entity
@Table(name="Attendance_Table")

public class Attendance {

	@Id
	
	@GeneratedValue
   	 private Long id; 
	 @Transient
	 private String name;
	 @Transient
	 private String session;
	 private String course; 
	 private String semester; 
	 private String date; 
	 private String time; 
	 private String subjectId; 
	 @Transient
	 private String status; 
	 @Transient
	 private String takeAttendance;
	 
	 @Transient
	 private List<Student> studList;
	 
	 
	
	public List<Student> getStudList() {
		return studList;
	}
	public void setStudList(List<Student> studList) {
		this.studList = studList;
	}
	public String getTakeAttendance() {
		return takeAttendance;
	}
	public void setTakeAttendance(String takeAttendance) {
		this.takeAttendance = takeAttendance;
	}
	public Long getId() {
			return id;
		}
	public String getTime() {
	return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getSession() {
		return session;
	}
	public void setSession(String session) {
		this.session = session;
	}
	public String getSubjectId() {
		return subjectId;
	}
	public void setSubjectId(String subject_Id) {
		this.subjectId = subject_Id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public String getCourse() {
		return course;
	}
	public void setCourse(String cource) {
		this.course = cource;
	}
	public String getSemester() {
		return semester;
	}
	public void setSemester(String semester) {
		this.semester = semester;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "Attendance [id=" + id + ", name=" + name + ", session=" + session + ", course=" + course + ", semester="
				+ semester + ", date=" + date + ", time=" + time + ", subject_Id=" + subjectId + ", status=" + status
				+ ", takeAttendance=" + takeAttendance + ", studList=" + studList + "]";
	}
	 
	
	
	 
	 
}
