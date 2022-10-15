import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-submit-complaint',
  templateUrl: './submit-complaint.component.html',
  styleUrls: ['./submit-complaint.component.css']
})
export class SubmitComplaintComponent implements OnInit {
errorAlert:boolean = false;
errorMsg:string = "";
complaintRef = new FormGroup({
address:new FormControl(),
cemail:new FormControl,
code:new FormControl(),
eemail:new FormControl(),
reason:new FormControl(),
status:new FormControl()
});
  constructor() { }

  ngOnInit(): void {
  }

  submitComplaint(){

  }

}
