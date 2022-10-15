package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.User;
import com.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userRepository;

	public String signIn(User u) {
		
		Optional<User> result = userRepository.findById(u.getEmailid());
		if (result.isPresent()) {
			User db_user = result.get();

			if (db_user.getPassword().equals(u.getPassword())) {
				if (db_user.getRole().equalsIgnoreCase("admin")) {
					return "admin login";

				} else if (db_user.getRole().equalsIgnoreCase("manager")) {
					return "manager login";
				} else if (db_user.getRole().equalsIgnoreCase("engineer")) {
					return "engineer login";
				} else {
					return "customer login";
				}
			} else {
				return "Wrong password";
			}

		} else {
			return "Wrong email id";
		}
	}

	public String signUp(User u) {
		Optional<User> result = userRepository.findById(u.getEmailid());

		if (result.isPresent()) {
			return "Account already exist with that emailid";
		} else {

			if (u.getRole().equalsIgnoreCase("admin")) {
				return "cant create admin account";
			} else {
				userRepository.save(u);
				return "User saved";
			}
		}
	}

	public String updatePassword(User u) {
		Optional<User> result = userRepository.findById(u.getEmailid());

		if (result.isPresent() != true) {

			return "password not updated";

		} else {
			User db_user = result.get();
			db_user.setPassword(u.getPassword());
			userRepository.saveAndFlush(db_user);
			return "password  updated";
		}
	}
	
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
	
	public String getUser(String emailid) {
		Optional<User>result = userRepository.findById(emailid);
		
		if (result.isPresent()) {
			User db_user = result.get();
			
			return db_user.toString();
		}else {
			return "Record not found";
		}
	}

}
