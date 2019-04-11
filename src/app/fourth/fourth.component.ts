import { DataShareService } from "./../services/data-share.service";
import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsResponse } from '../interfaces/posts-response.interface';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {
  posts$: Observable<PostsResponse[]>;
  constructor(private httpService: HttpService, private dataShareService: DataShareService) { }

  ngOnInit() {
    this.httpService.getData().subscribe((data) => {
      console.log('data received', data);
      this.dataShareService.postsData = data;
    }, (err) => {
      console.log(err);
    }, () => {
      console.log('completed');
    });

    this.posts$ = this.httpService.getData();
  }

}
