import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sample-app';
  show = false;
  personData = null;

  ngOnInit() {
    console.log(this);
  }

  onClick() {
    console.log(this);
    this.show = !this.show
    this.personData = { name: 'Bhanu', company: 'Vanguard'};
  }
}
