import { Component, OnInit } from '@angular/core';
import { Complaint } from '../model/complaint';
import { ComplaintService } from '../service/complaint.service';

@Component({
  selector: 'app-viewwipcomplaints',
  templateUrl: './viewwipcomplaints.component.html',
  styleUrls: ['./viewwipcomplaints.component.css']
})
export class ViewwipcomplaintsComponent implements OnInit {

  complaints:Array<Complaint> = [];
  constructor(public cs:ComplaintService) { }
  status:string = "WIP" ;
  email:string = "";
  ngOnInit(): void {
    
    this.loadComplaints(this.status);
    this.email = localStorage.getItem("userEmail") as string;
    
    
  }

  loadComplaints(status:any){
    this.cs.getComplaintsByStatus(status).subscribe((result: Complaint[]) =>{
      this.complaints = result;
    },(error: any) =>{
      console.log(error);
      
    })
  }

  deleteComplaint(cid:any){
    this.cs.deleteComplaint(cid).subscribe((result: any) =>{
      console.log(cid+" deleted");
      
      this.loadComplaints(this.status);
     },(error: any) =>{
      console.log(error);
      
     });
    }
}
