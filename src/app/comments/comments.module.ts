import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {CommentsRoutingModule} from './comments-routing.module';
import {CommentComponent} from './comment.components/comment/comment.component';
import {CommentsComponent} from './comments.components/comments/comments.component';
import {CommentsDataService} from './service/comments-data.service';
import {CommentsDetailsComponent} from './comments-details/comments-details.component';
import {CommentsResolver} from "./service/resolvers/comments.resolver";
import {CommentResolver} from "./service/resolvers/comment.resolver";

@NgModule({
  declarations: [
    CommentComponent,
    CommentsComponent,
    CommentsDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    HttpClientModule
  ],
  exports: [
    CommentComponent
  ],
  providers: [CommentsDataService, CommentsResolver, CommentResolver]
})
export class CommentsModule {
}
