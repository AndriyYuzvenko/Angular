import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IComments} from "../../models/comments.interfaces";

@Component({
  selector: 'app-comments-details',
  templateUrl: './comments-details.component.html',
  styleUrls: ['./comments-details.component.css']
})
export class CommentsDetailsComponent implements OnInit {
  @Input()
  commentDetails: IComments

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({commentData}) => this.commentDetails = commentData)
  }

}
