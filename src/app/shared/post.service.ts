import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get('/api/posts');
  }

  makePost(post: {}) {
    this.http
      .post('/api/posts', post)
      .toPromise()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
}
