import { Component, OnInit } from '@angular/core';
import { posts } from './blogposts';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts: any;

  constructor() { }

  ngOnInit() {
    this.posts = posts;
  }

}
