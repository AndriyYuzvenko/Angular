import {Component, OnInit} from '@angular/core';

import {IComments} from '../../../models/comments.interfaces';
import {CommentsDataService} from "../../service/comments-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: IComments[];

  constructor(private commentsDataService: CommentsDataService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({commentsData}) => this.comments = commentsData)
  }

}
