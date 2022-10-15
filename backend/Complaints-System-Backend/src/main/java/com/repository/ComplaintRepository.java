package com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.entity.Complaint;
@Repository
public interface ComplaintRepository extends JpaRepository<Complaint, Integer> {

	@Query("select c from Complaint c where c.status = :status")
	public List<Complaint> findComplaintsByStatus(@Param("status") String status);
	
	@Query("select c from Complaint c where c.cemail = :cemail")
	public List<Complaint> findComplaintByCustomerEmail(@Param("cemail") String cemail);
	
	@Query("select c from Complaint c where c.eemail = :eemail")
	public List<Complaint> findComplaintByAssignedToEngineer(@Param("eemail") String eemail);
	
	
	@Query("select c from Complaint c where c.code= :zcode")
	public List<Complaint> findComplaintByZipCode(@Param("zcode") String zcode);
	
	

}
