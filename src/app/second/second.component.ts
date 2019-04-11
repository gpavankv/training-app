import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  numArray = [1, 2, 3, 4, 5];

  nameArray = [
    { id: 1, name: 'bhanu'},
    { id: 2, name: 'pavan'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
