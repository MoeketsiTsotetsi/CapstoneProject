import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-createuseradmin',
  templateUrl: './createuseradmin.component.html',
  styleUrls: ['./createuseradmin.component.css']
})
export class CreateuseradminComponent implements OnInit {
  errorAlert:boolean = false;
  errorMsg:string = "";
  
  loginRef = new FormGroup({
  emailid : new FormControl(),
  password:new FormControl(),
  fullname : new FormControl(),
  role:new FormControl()
  
  });

  constructor(public us:UserService) { }

  ngOnInit(): void {
  }

  signUp(){
    let signUpInfo = this.loginRef.value;

    this.us.signUp(signUpInfo).subscribe(result =>{
      this.errorAlert = true;
      this.errorMsg = result;
    },error =>{
      console.log(error);
      
    })
    
  }

}
