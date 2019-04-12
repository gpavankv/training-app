import { Logger } from './../services/logger.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataShareService } from '../services/data-share.service';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // providers: [DataShareService],
})
export class HomeComponent implements OnInit, OnDestroy {

  destroy$ = new Subject();
  constructor(private dataShareService: DataShareService, private logger: Logger) { }

  ngOnInit() {
    this.dataShareService.initValue = 'Vinod';
    console.log(this.dataShareService);
    this.logger.printErrorData('I have an err');


    interval(1000).pipe(takeUntil(this.destroy$)).subscribe((data: number) => {
      console.log("rxjs data", data);
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
