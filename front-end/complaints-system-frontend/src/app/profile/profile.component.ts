import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  newPassword: string = "";
  confirmPassword: string = "";
  userEmail: string = "";
  user: User = new User('', '', '', '');

  constructor(public us: UserService) { }

  ngOnInit(): void {
    this.userEmail = localStorage.getItem("userEmail") as string;
  }

  validateAndChangePassword() {
    if (this.newPassword === this.confirmPassword) {
      this.user.emailid = this.userEmail;
      this.user.password = this.newPassword;

      this.changePassword();
    } else {
      console.log('New passwords do not match');
    }
  }

  changePassword() {
    this.us.updatePassword(this.user).subscribe({
      next: (result: any) => {
        alert(result);
        this.clearPasswordFields();
      },
      error: (error) => {
        alert("Error Updating password")
        console.error('Error updating password:', error);
      }
    });
  }

  clearPasswordFields() {
    this.newPassword = '';
    this.confirmPassword = '';
  }
}
