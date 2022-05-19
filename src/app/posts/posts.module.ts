import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {PostsRoutingModule} from './posts-routing.module';
import {PostsComponent} from './posts-components/posts/posts.component';
import {PostComponent} from './post.components/post/post.component';
import {PostsDataService} from './posts.services/posts-data.service';

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule,
  ],
  exports: [
    PostComponent
  ],
  providers: [PostsDataService]
})
export class PostsModule {
}
