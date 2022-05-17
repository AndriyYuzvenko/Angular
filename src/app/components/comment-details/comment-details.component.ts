import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {ICommentDetails} from '../../models/comment.details.interface';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  @Input()
  commentsDetails:ICommentDetails

  constructor(private activatedRoute:ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(value => {
      this.commentsDetails = this.router.getCurrentNavigation()?.extras?.state?.['data'] as ICommentDetails;
    })
  }

  ngOnInit(): void {
  }

}
