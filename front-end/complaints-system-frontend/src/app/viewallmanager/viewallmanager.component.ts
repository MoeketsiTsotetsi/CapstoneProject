import { Component, OnInit } from '@angular/core';
import { Complaint } from '../model/complaint';
import { ComplaintService } from '../service/complaint.service';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-viewallmanager',
  templateUrl: './viewallmanager.component.html',
  styleUrls: ['./viewallmanager.component.css']
})
export class ViewallmanagerComponent implements OnInit {
   complaints:Array<Complaint> = [];
   users:Array<User> = [];
   engineers:Array<User> = [];
   managerEmail:string = "";
   flag:boolean = false;
   msgFlag:boolean = false;
   msg:string = "";
   cid:number = 0;
   eemail:string = "";
  constructor(public cs:ComplaintService,public us:UserService) { }

ngOnInit(): void {
  this.loadComplaints();
  this.loadEngineers();
  this.managerEmail = localStorage.getItem("userEmail") as string;
}

loadEngineers() {
  this.us.getAllUsers().subscribe(result => {
    this.users = result;

    this.engineers = this.users.filter(user => user.role === "engineer");
  });
}

loadComplaints() {
  this.cs.getAllComplaints().subscribe(
    result => {
      this.complaints = result;
    },
    error => {
      console.log(error);
    }
  );
}

assignEngineer(complaint: Complaint) {
  this.msgFlag = false; // Reset the message flag
  this.flag = true;
  this.cid = complaint.cid;
  this.eemail = complaint.eemail;
}

updateComplaintDetails() {
  let updated_complaint = { cid: this.cid, eemail: this.eemail };

  this.cs.updateComplaintEngineer(updated_complaint).subscribe(
    result => {
      this.msg = result;
      this.msgFlag = true;
      this.loadComplaints();
    },
    error => {
      console.log(error);
    }
  );
}

close() {
  this.flag = false;
}


}
