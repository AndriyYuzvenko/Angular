import {Component, OnInit} from '@angular/core';

import {PostsDataService} from '../../posts.services/posts-data.service';
import {IPosts} from '../../../models/posts.interfaces';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: IPosts[];

  constructor(private postsDataService: PostsDataService) {
  }

  ngOnInit(): void {
    this.postsDataService.getPosts().subscribe(value => this.posts = value)
  }

}
