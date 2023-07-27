import { Component, OnInit } from '@angular/core';
import { Complaint } from '../model/complaint';
import { ComplaintService } from '../service/complaint.service';

@Component({
  selector: 'app-viewassignedcomplaints',
  templateUrl: './viewassignedcomplaints.component.html',
  styleUrls: ['./viewassignedcomplaints.component.css']
})
export class ViewassignedcomplaintsComponent implements OnInit {

  complaints:Array<Complaint> = [];
   
  flag:boolean = false;
  hasComplaints:boolean = false;
  msgFlag:boolean = false;
  msg:string = "";
  cid:number = 0;
  eemail:string = "";
  status:string = "";
  constructor(public cs:ComplaintService) { }

  ngOnInit(): void {
  let obj = localStorage.getItem("userEmail");
  if (obj!=null){
    this.eemail = obj;
  }

    this.loadComplaints(this.eemail);
    if(this.complaints.length> 0){
      this.hasComplaints = true;
      
    }
  }
  
    
  


  loadComplaints(eemail:any){
  this.cs.getComplaintsByEngineer(eemail).subscribe(result =>{
   this.complaints = result;
  },error =>{
    console.log(error);
    
  })
  }

  changeStatus(c:any){
    this.flag = true;
    this.cid = c.cid;
    this.status =c.status;

  }

  close(){
   this.flag = false;
  }
  
  updateComplaintDetails(){
    let updated_complaint = {cid:this.cid,status:this.status};
    this.cs.updateComplaintStatus(updated_complaint).subscribe(result =>{
     this.msgFlag = true;
     this.msg = result;
     this.loadComplaints(this.eemail);
    },error=>{
      console.log(error);
      
    })

  }

}
