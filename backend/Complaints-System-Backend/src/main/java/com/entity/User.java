package com.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {
	@Id
	private String emailid;
	private String fullname;
	private String role;
	private String password;
	public String getEmailid() {
		return emailid;
	}
	
	
	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public String getFullname() {
		return fullname;
	}
	public void setFullname(String fullname) {
		this.fullname = fullname;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	
	@Override
	public String toString() {
		return "User [emailid=" + emailid + ", fullname=" + fullname + ", role=" + role + ", password=" + password
				+ "]";
	}
	
	
}
