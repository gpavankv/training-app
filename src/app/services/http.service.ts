import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsResponse } from '../interfaces/posts-response.interface';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
  constructor(private httpClient: HttpClient) { }

  getData(): Observable<PostsResponse[]> {
    return this.httpClient.get<PostsResponse[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getDelayedResponse(): Observable<any> {
    return this.httpClient.get('https://reqres.in/api/users?delay=3');
  }
}
