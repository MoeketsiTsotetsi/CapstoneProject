import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engineer',
  templateUrl: './engineer.component.html',
  styleUrls: ['./engineer.component.css']
})
export class EngineerComponent implements OnInit {
  email:string = "";
  constructor() { }

  ngOnInit(): void {
    this.email = localStorage.getItem("userEmail") as string;
  }

}
