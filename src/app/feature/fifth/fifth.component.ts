import { DataShareService } from './../../services/data-share.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.css']
})
export class FifthComponent implements OnInit {

  constructor(private dataShareService: DataShareService) { }

  ngOnInit() {
    this.dataShareService.initValue = 'Pavan';
    console.log(this.dataShareService);
  }

}
