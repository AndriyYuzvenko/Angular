import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CommentsComponent} from './comments.components/comments/comments.component';
import {CommentsResolver} from "./service/resolvers/comments.resolver";
import {CommentsDetailsComponent} from "./comments-details/comments-details.component";
import {CommentResolver} from "./service/resolvers/comment.resolver";

const routes: Routes = [
  {
    path: '', component: CommentsComponent,
    resolve: {commentsData: CommentsResolver},
    children: [
      {path: ':id', component: CommentsDetailsComponent, resolve: {commentData: CommentResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule {
}
