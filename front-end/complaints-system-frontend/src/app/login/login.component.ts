import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMsg:string = "";
  loginRef = new FormGroup({
    emailid:new FormControl(),
    password:new FormControl()
  })

  errorAlert:Boolean = false;
  constructor(public us:UserService,public router:Router) { }

  ngOnInit(): void {
  }

  goToRegister(){
    this.router.navigate(['/register']);
  }

  signIn(){
   let user = this.loginRef.value;
   
    this.us.signIn(user).subscribe({
      next:(result:any)=> {

         if(result == "admin login"){
          
          localStorage.setItem("userEmail",user.emailid);
          this.router.navigate(['/admin-home']);
         }else if(result=="manager login"){

          localStorage.setItem("userEmail",user.emailid);
          this.router.navigate(["/manager-home"]);

         }else if(result == "engineer login"){

          localStorage.setItem("userEmail",user.emailid);
          this.router.navigate(["/engineer-home"]);

         }else if(result=="customer login"){
          localStorage.setItem("userEmail",user.emailid);
          this.router.navigate(["/home"]);
         }else{
          this.errorAlert = true;
          this.errorMsg = result;
         }
      },
      error:(error:any)=>console.log(error),
  
      complete:()=>console.log("done")
      
    });
    
  
  
   
  }

}
