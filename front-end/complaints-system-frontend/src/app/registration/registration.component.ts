import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  errorAlert: boolean = false;
  errorMsg: string = "";

  loginRef = new FormGroup({
    emailid: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    fullname: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required)
  });

  constructor(public us: UserService, public router: Router) { }

  redirectToLogin():void{
   this.router.navigate(['/login']);
  }

  signUp() {
    if (this.loginRef.valid) {
      let user = this.loginRef.value;

      this.us.signUp(user).subscribe({
        next: (result: any) => {
          if (result == "User saved") {
            alert("Successfully registered");
            this.router.navigate(['/login']);
          } else {
            this.errorAlert = true;
            this.errorMsg = result;
          }
        },
        error: (error: any) => console.log(error)
      });
    } else {
      alert("Please fill out all the required fields correctly.");
    }
  }
}
