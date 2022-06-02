import {Injectable} from '@angular/core';
import {
   Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {IGenre} from "../../../../models/genres.interface";
import {GenresService} from "../genres.service";

@Injectable({
  providedIn: 'root'
})
export class GenresResolver implements Resolve<IGenre> {
  constructor(private genresService: GenresService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IGenre> | Promise<IGenre> | IGenre {
    return this.genresService.getGenres()
  }
}
