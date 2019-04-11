import {
  Component,
  OnInit,
  OnChanges,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log('cons');
  }

  ngOnInit() {
    console.log('onInit');
  }

  ngOnChanges() {
    console.log('on changes');
  }

  ngAfterContentInit() {
    console.log('after cont. init');
  }

  ngAfterContentChecked() {
    console.log('after cont. checked');
  }

  ngAfterViewInit() {
    console.log('after view init');
  }

  ngAfterViewChecked() {
    console.log('after view checked');
  }

  ngOnDestroy() {
    console.log('destroyed');
  }

}
