package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.Complaint;
import com.repository.ComplaintRepository;

@Service
public class ComplaintService {
	@Autowired
	ComplaintRepository cr;
	
	public String createComplaint(Complaint c) {
		cr.save(c);
		return "Complaint raised";
	}
	
	public String getComplaintById(int cid) {
		Optional<Complaint>result = cr.findById(cid);
		
		if(result.isPresent()) {
			Complaint c = result.get();
			return c.toString();
		}else {
			return "No complaint with that id";
		}
	}
	
	public List<Complaint> getAllComplaints(){
		return cr.findAll();
	}
	
	public List<Complaint> getComplaintsByCustomerEmail(String cemail){
		return cr.findComplaintByCustomerEmail(cemail);
	}
	
	public List<Complaint>getComplaintsByStatus(String status){
		return cr.findComplaintsByStatus(status);
	}
	
	public List<Complaint> findComplaintsAssignedToEngineer(String engEmail){
		return cr.findComplaintByAssignedToEngineer(engEmail);
	}
	
	public String updateComplaintEngineer(Complaint c) {
		Optional<Complaint>result = cr.findById(c.getCid());
		
		if (result.isPresent()) {
			Complaint db_c = result.get();
			
			db_c.setEemail(c.getEemail());
			
			cr.saveAndFlush(db_c);
			return "New engineer assigned";
		}else {
			return "Complaint not found";
		}
	}
	
	public String updateComplaintStatus(Complaint c) {
		Optional<Complaint>result = cr.findById(c.getCid());
		
		if(result.isPresent()) {
			Complaint db_c = result.get();
			db_c.setStatus(c.getStatus());
			
			cr.saveAndFlush(db_c);
			return "Return status changed to"+c.getStatus();
		}else {
			return "Status not changed";
		}
	}
	
	public List<Complaint> getComplaintsByZipCode(String zip_Code){
		return cr.findComplaintByZipCode(zip_Code);
	}
	
	public String deleteComplaint(int cid) {
		Optional<Complaint>result = cr.findById(cid);
		
		if(result.isPresent()) {
			cr.deleteById(cid);
			return "Complaint deleted";
		}else {
			return "No complaint found";
		}
	}

}
