import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
errorAlert:boolean = false;
errorMsg:string = "";

loginRef = new FormGroup({
emailid : new FormControl(),
password:new FormControl(),
fullname : new FormControl(),
role:new FormControl()

});
  constructor(public us:UserService,public router:Router) { }

  ngOnInit(): void {
  }

 

  signUp(){
    let user = this.loginRef.value;

    if(user.emailid !="" && user.fullname!="" &&user.password!=""&&user.role!=""){
      this.us.signUp(user).subscribe({
        next:(result:any)=> {
             if(result == "User saved"){
              alert("Successfully registered");
              this.router.navigate(['/login']);
  
             }else{
              this.errorAlert = true;
              this.errorMsg = result;
             }
        },
        error:(error:any)=>console.log(error),
    
        complete:()=>console.log("done")
        
      });
    }else{
      alert("Enter all the details");
    }
   
  
  }

}
