import {Component, OnInit} from '@angular/core';

import {PostsDataService} from '../../posts.services/posts-data.service';
import {IPosts} from '../../../models/posts.interfaces';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: IPosts[];

  constructor(private postsDataService: PostsDataService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({postsData}) => this.posts = postsData)
  }

}
