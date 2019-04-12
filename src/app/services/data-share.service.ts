import { PostsResponse } from './../interfaces/posts-response.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class DataShareService {
  postsData: PostsResponse[];
  initValue = 'Bhanu';
  constructor() { }
}
