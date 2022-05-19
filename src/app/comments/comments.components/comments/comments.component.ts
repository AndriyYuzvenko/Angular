import {Component, OnInit} from '@angular/core';

import {IComments} from '../../../models/comments.interfaces';
import {CommentsDataService} from "../../service/comments-data.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: IComments[];

  constructor(private commentsDataService:CommentsDataService) {
  }

  ngOnInit(): void {
    this.commentsDataService.getComments().subscribe(value => this.comments = value)
  }

}
