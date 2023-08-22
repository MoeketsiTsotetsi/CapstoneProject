import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fullname:string = "";

  constructor(public _router:Router) { }

  ngOnInit(): void {
    this.fullname = localStorage.getItem("userEmail") as string;

  }

  logout(){
    this._router.navigate(["/login"]);
  }

}
