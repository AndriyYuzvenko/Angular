import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {GenresRoutingModule} from './genres-routing.module';
import {GenreDetailsComponent} from './genre-details/genre-details.component';
import {GenreComponent} from './genre/genre.component';
import {GenresResolver} from "./genres-services/resolvers/genres.resolver";
import {GenreResolver} from "./genres-services/resolvers/genre.resolver";
import {GenresService} from "./genres-services/genres.service";
import {GenresComponent} from "./genres/genres.component";


@NgModule({
  declarations: [
    GenreDetailsComponent,
    GenreComponent,
    GenresComponent
  ],
  imports: [
    CommonModule,
    GenresRoutingModule,
    HttpClientModule
  ],
  exports: [GenreComponent],
  providers: [GenresResolver,GenreResolver,GenresService]
})
export class GenresModule {
}
