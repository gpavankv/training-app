import { Component, OnInit } from '@angular/core';
import { DataShareService } from "../services/data-share.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private dataShareService: DataShareService) { }

  ngOnInit() {
    console.log(this.dataShareService.postsData);
  }

}
