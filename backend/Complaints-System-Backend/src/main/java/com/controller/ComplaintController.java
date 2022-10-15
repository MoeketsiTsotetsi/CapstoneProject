package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Complaint;
import com.service.ComplaintService;

@RestController
@RequestMapping("complaint")
@CrossOrigin
public class ComplaintController {
	@Autowired
	ComplaintService cs;

	@PostMapping(value = "createComplaint", consumes = MediaType.APPLICATION_JSON_VALUE)
	public String createComplaint(@RequestBody Complaint c) {
		return cs.createComplaint(c);
	}

	@GetMapping(value = "getAllComplaints", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<Complaint> getAllComplaints() {
		return cs.getAllComplaints();
	}

	@GetMapping(value = "getComplaintsByCustomer/{cemailid}", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<Complaint> getCompliantsByCustomerEmailId(@PathVariable("cemailid") String cemailid) {
		return cs.getComplaintsByCustomerEmail(cemailid);
	}

	@GetMapping(value = "getComplaintsByZipCode/{code}", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<Complaint> getCompliantsByZipCode(@PathVariable("code") String code) {
		return cs.getComplaintsByZipCode(code);
	}
	@GetMapping(value = "getComplaintsByAssignedEngineer/{eemail}", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<Complaint> getCompliantsByAssignedEngineer(@PathVariable("eemail") String email) {
		return cs.findComplaintsAssignedToEngineer(email);
	}
	@GetMapping(value = "getComplaintsByStatus/{status}", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<Complaint> getCompliantsByStatus(@PathVariable("status") String status) {
		return cs.getComplaintsByStatus(status);
	}

	@PutMapping(value = "updateComplaintStatus", consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public String updateComplaintStatus(@RequestBody Complaint c) {
		return cs.updateComplaintStatus(c);
	}
	@PutMapping(value = "updateComplaintEngineer", consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public String updateComplaintEngineer(@RequestBody Complaint c) {
		return cs.updateComplaintEngineer(c);
	}
	
	@GetMapping(value = "getComplaintById/{cid}")
	public String getComplaintById(@PathVariable("cid") int cid) {
		return cs.getComplaintById(cid);
	}
	
	@DeleteMapping(value = "deleteComplaint/{cid}")
	public String deleteComplaint(@PathVariable("cid") int cid) {
		return cs.deleteComplaint(cid);
	}
	

}
