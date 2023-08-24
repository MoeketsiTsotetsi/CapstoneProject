package com.service;

import java.util.List;
import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
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
            User dbUser = result.get();

            if (BCrypt.checkpw(u.getPassword(), dbUser.getPassword())) {
                String role = dbUser.getRole().toLowerCase();
                return role + " login";
            } else {
                return "Wrong password";
            }

        } else {
            return "Wrong email id";
        }
    }

	 public String signUp(User u) {
	        Optional<User> existingUser = userRepository.findById(u.getEmailid());

	        if (existingUser.isPresent()) {
	            return "Account already exists with that emailid";
	        } else {
	            // Hash the password before saving
	            String plainPassword = u.getPassword();
	            String hashedPassword = BCrypt.hashpw(plainPassword, BCrypt.gensalt());
	            u.setPassword(hashedPassword);

	            userRepository.save(u);
	            return "User saved";
	        }
	    }

	 public String updatePassword(User u) {
	        Optional<User> result = userRepository.findById(u.getEmailid());

	        if (!result.isPresent()) {
	            return "Password not updated";
	        } else {
	            User dbUser = result.get();
	            String hashedPassword = BCrypt.hashpw(u.getPassword(), BCrypt.gensalt());
	            dbUser.setPassword(hashedPassword);
	            userRepository.saveAndFlush(dbUser);
	            return "Password updated";
	        }
	    }

	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	public User getUser(String emailid) {
		Optional<User> result = userRepository.findById(emailid);

		if (result.isPresent()) {
			User db_user = result.get();

			return db_user;
		} else {
			return null;
		}
	}
	
	
	

	public String deleteUser(String emailid) {
		Optional<User> result = userRepository.findById(emailid);

		if (result.isPresent()) {
			userRepository.deleteById(emailid);
			return "User deleted";
		} else {
			return "Record not found";
		}
	}

}
