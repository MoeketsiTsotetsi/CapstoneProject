package com.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Complaint {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int cid;
private String reason;
private String address;
private String code;

private String cemail;

private String eemail;
private String status;
public int getCid() {
	return cid;
}
public void setCid(int cid) {
	this.cid = cid;
}
public String getReason() {
	return reason;
}
public void setReason(String reason) {
	this.reason = reason;
}
public String getAddress() {
	return address;
}
public void setAddress(String address) {
	this.address = address;
}

public String getCode() {
	return code;
}
public void setCode(String code) {
	this.code = code;
}
public String getCemail() {
	return cemail;
}
public void setCemail(String cemail) {
	this.cemail = cemail;
}
public String getEemail() {
	return eemail;
}
public void setEemail(String eemail) {
	this.eemail = eemail;
}
public String getStatus() {
	return status;
}
public void setStatus(String status) {
	this.status = status;
}
@Override
public String toString() {
	return "Complaint [cid=" + cid + ", reason=" + reason + ", address=" + address + ", code=" + code + ", cemail="
			+ cemail + ", eemail=" + eemail + ", status=" + status + "]";
}




}
