import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {CommentsRoutingModule} from './comments-routing.module';
import {CommentComponent} from './comment.components/comment/comment.component';
import {CommentsComponent} from './comments.components/comments/comments.component';
import {CommentsDataService} from './service/comments-data.service';

@NgModule({
  declarations: [
    CommentComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    HttpClientModule
  ],
  exports: [
    CommentComponent
  ],
  providers: [CommentsDataService]
})
export class CommentsModule {
}
