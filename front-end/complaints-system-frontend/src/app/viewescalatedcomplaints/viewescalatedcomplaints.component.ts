import { Component, OnInit } from '@angular/core';
import { Complaint } from '../model/complaint';
import { ComplaintService } from '../service/complaint.service';

@Component({
  selector: 'app-viewescalatedcomplaints',
  templateUrl: './viewescalatedcomplaints.component.html',
  styleUrls: ['./viewescalatedcomplaints.component.css']
})
export class ViewescalatedcomplaintsComponent implements OnInit {
  complaints:Array<Complaint> = [];
  constructor(public cs:ComplaintService) { }
  status:string = "ESCALATED" ;
  ngOnInit(): void {
    
    this.loadComplaints(this.status);
  }

  loadComplaints(status:any){
    this.cs.getComplaintsByStatus(status).subscribe(result =>{
      this.complaints = result;
    },error =>{
      console.log(error);
      
    })
  }

  deleteComplaint(cid:any){
    this.cs.deleteComplaint(cid).subscribe(result =>{
      console.log(cid+" deleted");
      
      this.loadComplaints(this.status);
     },error =>{
      console.log(error);
      
     });
    }

}
