import { HttpService } from "./../../services/http.service";
import { DataShareService } from './../../services/data-share.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sixth',
  templateUrl: './sixth.component.html',
  styleUrls: ['./sixth.component.css']
})
export class SixthComponent implements OnInit {

  constructor(private dataShareService: DataShareService, private httpService: HttpService) { }

  ngOnInit() {
    console.log(this.dataShareService);
    this.httpService.getDelayedResponse().subscribe((data) => {
      console.log("I came here second", data);
    }, (err) => {
      console.log(err);
    }, () => {
      console.log('completed');
    });
    console.log("I came here first");
  }

}
