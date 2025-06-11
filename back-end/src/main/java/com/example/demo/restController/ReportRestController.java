package com.example.demo.restController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.ReportService;

@RestController
@CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
public class ReportRestController {
	
	@Autowired
	ReportService reportService;
	
	@GetMapping("/getreport/{courseid}/{studentid}")
	public double getReport(@PathVariable String courseid,@PathVariable long studentid) {
		return reportService.getPercentage(courseid, studentid);
	}
	
}
