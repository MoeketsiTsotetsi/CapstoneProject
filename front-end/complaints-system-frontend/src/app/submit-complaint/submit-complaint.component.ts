import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ComplaintService } from '../service/complaint.service';

@Component({
  selector: 'app-submit-complaint',
  templateUrl: './submit-complaint.component.html',
  styleUrls: ['./submit-complaint.component.css']
})
export class SubmitComplaintComponent implements OnInit {
errorAlert:boolean = false;
fullname:string = "";
errorMsg:string = "";
complaintRef = new FormGroup({
address:new FormControl(),
cemail:new FormControl,
code:new FormControl(),
eemail:new FormControl(),
reason:new FormControl(),
status:new FormControl()
});
  constructor(public cs:ComplaintService) { }

  ngOnInit(): void {
    this.fullname = JSON.stringify(localStorage.getItem("userEmail"));
  }

  submitComplaint(){
  let complaint = this.complaintRef.value;
  this.cs.createComplaint(complaint).subscribe(result =>{
    this.errorAlert = true;
    this.errorMsg = result;
    this.complaintRef.reset();
    
  },error =>{
    console.log(error);
    
  });
  }

}
