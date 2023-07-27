import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  userEmail:string = "";

  constructor() { }

  ngOnInit(): void {
    this.userEmail = JSON.stringify(localStorage.getItem("userEmail")).trim();

  }

}
