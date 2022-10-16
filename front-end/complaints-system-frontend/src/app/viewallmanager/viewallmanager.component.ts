import { Component, OnInit } from '@angular/core';
import { Complaint } from '../model/complaint';
import { ComplaintService } from '../service/complaint.service';

@Component({
  selector: 'app-viewallmanager',
  templateUrl: './viewallmanager.component.html',
  styleUrls: ['./viewallmanager.component.css']
})
export class ViewallmanagerComponent implements OnInit {
   complaints:Array<Complaint> = [];
   
   flag:boolean = false;
   msgFlag:boolean = false;
   msg:string = "";
   cid:number = 0;
   eemail:string = "";
  constructor(public cs:ComplaintService) { }

  ngOnInit(): void {
    this.loadComplaints();
  }
  loadComplaints(){
    this.cs.getAllComplaints().subscribe(result =>{
     this.complaints = result;
    },error =>{
      console.log(error);
      
    })
  }

  assignEngineer(c:any){
    this.flag = true;
    this.cid = c.cid;
    this.eemail = c.eemail;
    console.log(this.cid);
    
  }

  updateComplaintDetails(){
  let updated_complaint = {cid:this.cid,eemail:this.eemail};

  this.cs.updateComplaintEngineer(updated_complaint).subscribe(result =>{
    this.msg = result;
    this.msgFlag = true;
    this.loadComplaints();
  },error =>{
    console.log(error);
    
  });
  }

  close(){
    this.flag = false;
  }
}
