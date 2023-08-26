import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  userRole:string|null = null;

  constructor(public router:Router) { }

  ngOnInit(): void {
    this.userRole = localStorage.getItem('userRole');
  
    
  }

  logout(){
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userRole");
  }

}
