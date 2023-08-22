import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  userRole:string|null = null;

  constructor() { }

  ngOnInit(): void {
    this.userRole = localStorage.getItem('userRole');
  
    
  }

}
