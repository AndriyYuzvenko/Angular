import {Component, Input, OnInit} from '@angular/core';

import {IPosts} from '../../../models/posts.interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: IPosts;

  constructor() {
  }

  ngOnInit(): void {
  }

}
