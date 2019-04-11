import { PostsResponse } from './../interfaces/posts-response.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
  postsData: PostsResponse[];
  constructor() { }
}
