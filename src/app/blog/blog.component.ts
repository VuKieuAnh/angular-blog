import { Component, OnInit } from '@angular/core';
import {IPost} from '../post';
import {PostService} from '../post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  postList: IPost[] = [];

  constructor(
    private postService: PostService,
    ) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(next => (this.postList = next), error => (this.postList = []));
  }

}
