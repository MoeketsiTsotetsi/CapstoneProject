import { Component, OnInit } from '@angular/core';
import { Complaint } from '../model/complaint';
import { ComplaintService } from '../service/complaint.service';

@Component({
  selector: 'app-view-all-complaints',
  templateUrl: './view-all-complaints.component.html',
  styleUrls: ['./view-all-complaints.component.css']
})
export class ViewAllComplaintsComponent implements OnInit {
  complaints:Array<Complaint>=[];
  userEmail:string = "";
  constructor(public cs:ComplaintService) { }

  ngOnInit(): void {
   this.loadComplaints();
   this.userEmail = JSON.stringify(localStorage.getItem("userEmail")).trim();
  }

  loadComplaints(){
    this.cs.getAllComplaints().subscribe(result =>{
      this.complaints = result
      console.log(this.complaints);
      
    },error =>{
      console.log(error);
      
    });
  }

  deleteComplaint(cid:any){
   this.cs.deleteComplaint(cid).subscribe(result =>{
    console.log(cid+" deleted");
    
    this.loadComplaints();
   },error =>{
    console.log(error);
    
   });
  }

  

}
