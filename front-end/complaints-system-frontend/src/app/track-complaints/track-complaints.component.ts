import { Component, OnInit } from '@angular/core';
import { Complaint } from '../model/complaint';
import { ComplaintService } from '../service/complaint.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-track-complaints',
  templateUrl: './track-complaints.component.html',
  styleUrls: ['./track-complaints.component.css']
})
export class TrackComplaintsComponent implements OnInit {
  complaints:Array<Complaint> = [];
  fullname:string = "";
  hasComplaints:boolean = false;
  complaintsSubscription: Subscription | undefined;
  
  constructor(public cs:ComplaintService) { }

  ngOnInit(): void {
  const customerEmail = localStorage.getItem("userEmail");
  if (customerEmail !== null) {
    this.fullname = customerEmail.toString();
    this.loadComplaints(customerEmail);
  } 
  }

  loadComplaints(customerEmail:any){
     this.complaintsSubscription = this.cs.getComplaintsByCustomerEmail(customerEmail).subscribe({
    next: (result) => {
      this.complaints = result;
      if (this.complaints.length > 0) {
        this.hasComplaints = true;
        console.log(this.hasComplaints);
      }
    },
    error: (err) => {
      console.log(err);
    }
  });
  }


   ngOnDestroy(): void {
    if (this.complaintsSubscription) {
      this.complaintsSubscription.unsubscribe();
    }
  }
}


