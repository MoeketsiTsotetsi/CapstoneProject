import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-home',
  templateUrl: './manager-home.component.html',
  styleUrls: ['./manager-home.component.css']
})
export class ManagerHomeComponent implements OnInit {
  email:string = "";

  constructor() { }

  ngOnInit(): void {
    this.email = localStorage.getItem("userEmail") as string;
  }

}
