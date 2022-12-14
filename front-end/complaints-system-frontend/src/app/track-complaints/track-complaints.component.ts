import { Component, OnInit } from '@angular/core';
import { Complaint } from '../model/complaint';
import { ComplaintService } from '../service/complaint.service';

@Component({
  selector: 'app-track-complaints',
  templateUrl: './track-complaints.component.html',
  styleUrls: ['./track-complaints.component.css']
})
export class TrackComplaintsComponent implements OnInit {
  complaints:Array<Complaint> = [];
  
  constructor(public cs:ComplaintService) { }

  ngOnInit(): void {
    var customerEmail= localStorage.getItem("userEmail");
   this.loadComplaints(customerEmail);
   console.log(this.complaints);
   
    
  }

  loadComplaints(customerEmail:any){
    this.cs.getComplaintsByCustomerEmail(customerEmail).subscribe(result =>{
      this.complaints = result;
      
    },error =>{
      console.log(error);
      
    });
  }

}
