package com.example.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Attendance;

@Repository
public interface AttendanceRepo extends JpaRepository<Attendance,Long>{

	List<Attendance> findBySubjectId(String subject_id);
	
}
