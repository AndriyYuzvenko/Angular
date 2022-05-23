import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PostsComponent} from './posts-components/posts/posts.component';
import {PostDetailsComponent} from "./post-details/post-details.component";
import {PostsResolver} from "./posts.services/resolvers/posts.resolver";
import {PostResolver} from "./posts.services/resolvers/post.resolver";

const routes: Routes = [
  {
    path: '', component: PostsComponent,
    resolve: {postsData: PostsResolver},
    children: [
      {path: ':id', component: PostDetailsComponent, resolve: {postData: PostResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
