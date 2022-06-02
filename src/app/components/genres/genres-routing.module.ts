import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GenreResolver} from "./genres-services/resolvers/genre.resolver";
import {GenresComponent} from "./genres/genres.component";


const routes: Routes = [
  {
    path: '', component: GenresComponent,
    resolve: {genresData: GenreResolver}
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenresRoutingModule { }
