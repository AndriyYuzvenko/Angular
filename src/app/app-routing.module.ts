import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PopularMuviesComponent} from "./components/popular-muvies/popular-muvies.component";
import {GenresComponent} from "./components/genres/genres/genres.component";
import {HomeComponent} from "./app-components/home/home.component";

let routes: Routes = [
  {path:'',component:HomeComponent},
  // {path: 'movies', loadChildren: () => import('./components/genres/genres.module').then(m => m.GenresModule)},
  {path:'genres',loadChildren:()=>import('./components/genres/genres.module').then(m => m.GenresModule)},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
