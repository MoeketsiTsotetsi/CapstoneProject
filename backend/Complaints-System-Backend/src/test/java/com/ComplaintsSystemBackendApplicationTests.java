package com;

import static org.testng.Assert.assertEquals;

import java.util.List;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.entity.Complaint;
import com.entity.User;
import com.service.ComplaintService;
import com.service.UserService;

@SpringBootTest
class ComplaintsSystemBackendApplicationTests {

	@Autowired
	UserService us;

//	@Order(1)
//	@Test
//	public void testSignUpManager() {
//		User u = new User();
//
//		u.setEmailid("themba@gmail.com");
//		u.setFullname("Themba Baloyi");
//		u.setPassword("123456");
//		u.setRole("manager");
//
//		String result = us.signUp(u);
//
//		assertEquals(result, "User saved");
//
//	}
//
//	@Order(2)
//	@Test
//
//	public void testSignInManager() {
//		User u = new User();
//		
//		u.setEmailid("themba@gmail.com");
//		u.setPassword("123");
//		
//		String result = us.signIn(u);
//		
//		assertEquals(result, "manager login");
//	}
	
//	@Order(3)
//	@Test
//	
//	public void testUpdateMangerPassword() {
//		User u = new User();
//		
//		u.setEmailid("themba@gmail.com");
//		u.setPassword("123");
//		
//		String result = us.updatePassword(u);
//		
//		assertEquals(result,"password  updated");
//	}

	
//	@Test
//	public void testGetAllUsers() {
//		List<User>lstUsers = us.getAllUsers();
//		assertEquals(1, lstUsers.size());
//	}
	
	
	@Autowired
	ComplaintService cs;
	
//	@Test
//	public void testCreateCompliant() {
//		Complaint c = new Complaint();
//		
//		c.setAddress("227 Phuthaditjhaba");
//		c.setZipCode("9870");
//		c.setCemail("tmoeketsid@gmail.com");
//		c.setEemail("eng@gmail.com");
//		c.setStatus("RAISED");
//		c.setReason("Cannot place outgoing calls");
//	
//		
//		String result = cs.createComplaint(c);
//		
//		assertEquals(result,"Complaint raised");
//	}
	
//	@Test
//	public void testUpdateComplaintStatus() {
//		Complaint c = new Complaint();
//		c.setCid(1);
//		c.setStatus("WIP");
//		
//		String result = cs.updateComplaintStatus(c);
//		
//		assertEquals(result,"Return status changed to"+c.getStatus());
//	}
	
//	@Test
//	public void testAssignEngineer() {
//		Complaint c = new Complaint();
//		
//		c.setCid(1);
//		c.setEemail("test@gmail.com");
//		
//		String result = cs.updateComplaintEngineer(c);
//		assertEquals(result,"New engineer assigned");
//	}
	
	
//	@Test 
//	public void testFindComplaintsAssignedToEngineer() {
//		String engineerEmail = "test@gmail.com";
//		
//		List<Complaint> result = cs.findComplaintsAssignedToEngineer(engineerEmail);
//		
//		assertEquals(result.size(), 1);
//	}
//	
//	@Test
//	public void testFindComplaintsByCustomerEmail() {
//		String c_email = "tmoeketsid@gmail.com";
//		
//		List<Complaint>result = cs.getComplaintsByCustomerEmail(c_email);
//		
//		assertEquals(result.size(), 2);
//	}
//	
	
	@Test 
	public void testFindComplaintsByZipCode(){
		String zipCode = "9999";
		
		List<Complaint>result = cs.getComplaintsByZipCode(zipCode);
		
		assertEquals(result.size(),2);
	}
}
