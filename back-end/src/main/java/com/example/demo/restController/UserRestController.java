package com.example.demo.restController;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Student;
import com.example.demo.entity.User;
import com.example.demo.service.UserService;
@RestController
public class UserRestController {

	@Autowired
	private UserService userService;
	
	@PostMapping("/addusers")
	@CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
	public User addUser(@RequestBody User user) {
		return userService.saveUsers(user);
	}
	
	@GetMapping("/Getusers")
	@CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
	public List<User>showUsers(){
		return userService.getusers();
	}
	
	@PostMapping("/studentLogin")
	@CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
	public boolean loginStudent(@RequestBody User user){
		String tempEmail=user.getEmail();
		String tempPassword=user.getPassword();
		User userObj=null;
		if(tempEmail!=null && tempPassword!=null) {
			userObj=userService.fetchByEmailAndPassword(tempEmail, tempPassword);
		}
		if(userObj!=null) {
			System.out.println("Found");
			return true;
		}
		return false;
	}
	
	@PostMapping("/teacherLogin")
	@CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
	public boolean loginTeacher(@RequestBody User user){
		String tempEmail=user.getEmail();
		String tempPassword=user.getPassword();
		User userObj=null;
		if(tempEmail!=null && tempPassword!=null) {
			userObj=userService.fetchByEmailAndPassword(tempEmail, tempPassword);
		}
		if(userObj!=null) {
			System.out.println("Found");
			return true;
		}
		return false;
	}
	
	
}
