package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.User;
import com.service.UserService;

@RestController
@RequestMapping("user")
@CrossOrigin
public class UserController {

	@Autowired
	UserService us;
	
	@PostMapping(value = "signIn",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String signIn(@RequestBody User u) {
		return  us.signIn(u);
	}
	
	
	@PostMapping(value = "signUp",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String signUp(@RequestBody User u) {
		return us.signUp(u);
	}
	
	@GetMapping(value = "getAllUsers",consumes = MediaType.APPLICATION_JSON_VALUE)
	public List<User> getAllUsers(){
		return us.getAllUsers();
	}
	
	
	@GetMapping(value = "getUser/{emailid}",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String getUser(@PathVariable String emailid) {
		return us.getUser(emailid);
	}
	
	@PostMapping(value = "updatePassword",consumes = MediaType.APPLICATION_JSON_VALUE)
	
	public String updatePassword(@RequestBody User u) {
		return us.updatePassword(u);
	}
}
