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

 signIn() {
  let user = this.loginRef.value;

  this.us.signIn(user).subscribe({
    next: (result: any) => {
      const userRole = this.determineUserRole(result);

      if (userRole) {
        this.handleSuccessfulLogin(userRole, user.emailid);
      } else {
        this.handleError(result);
      }
    },
    error: (error: any) => console.log(error),
    complete: () => console.log('done')
  });
}

private determineUserRole(result: string): string | null {
  switch (result) {
    case 'admin login':
      return 'admin';
    case 'manager login':
      return 'manager';
    case 'engineer login':
      return 'engineer';
    case 'customer login':
      return 'customer';
    default:
      return null;
  }
}

private handleSuccessfulLogin(userRole: string, email: string): void {
  localStorage.setItem('userRole', userRole); // Store user role
  localStorage.setItem('userEmail', email);

  if (userRole === 'customer') {
    this.router.navigate(['/home']); // Update with correct path for customer home
  } else {
    this.router.navigate([`/${userRole}-home`]);
  }
}

private handleError(errorMsg: string): void {
  this.errorAlert = true;
  this.errorMsg = errorMsg;
}



}
