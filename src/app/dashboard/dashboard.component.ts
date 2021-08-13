import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  initPosts = [
    { id: '1', user: 'Jim', comment: 'How bout them Cowboys??' },
    { id: '2', user: 'Sandy', comment: 'Hopelessly devoted to you' },
    { id: '3', user: 'Eve', comment: 'My favorite season is summer' },
  ];

  posts = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    // this.fetchPosts();
  }

  // fetchPosts() {
  //   this.postService.getPosts().subscribe(
  //     (p) => {
  //       this.posts = Object.values(p);
  //       console.log(this.posts);
  //     },
  //     (error) => console.log(error)
  //   );
  // }
}
