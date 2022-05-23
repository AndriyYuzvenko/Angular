import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {PostsRoutingModule} from './posts-routing.module';
import {PostsComponent} from './posts-components/posts/posts.component';
import {PostComponent} from './post.components/post/post.component';
import {PostsDataService} from './posts.services/posts-data.service';
import { PostDetailsComponent } from './post-details/post-details.component';
import {PostResolver} from "./posts.services/resolvers/post.resolver";
import {PostsResolver} from "./posts.services/resolvers/posts.resolver";

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule,
  ],
  exports: [
    PostComponent
  ],
  providers: [PostsDataService,PostResolver,PostsResolver]
})
export class PostsModule {
}
