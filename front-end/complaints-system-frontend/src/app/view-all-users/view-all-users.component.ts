import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.css']
})
export class ViewAllUsersComponent implements OnInit {

  users:Array<User> = [];
  errorAlert:boolean = false;
  errorMsg:string = "";
  constructor(public us:UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  deleteUser(emailid:any){
   this.us.deleteUser(emailid).subscribe(result =>{
    this.errorAlert = true;
    this.errorMsg = result;
    this.loadUsers();
   },error =>{
    console.log(error);
    
   });
  }

  loadUsers(){
this.us.getAllUsers().subscribe(result =>{
  console.log(result);
  
  this.users = result;
},error =>{
  console.log(error);
  
})
  }

}
