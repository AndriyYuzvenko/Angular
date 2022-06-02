import {Injectable} from '@angular/core';
import {
   Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {IGenres} from "../../../../models/genres.interface";
import {GenresService} from "../genres.service";

@Injectable({
  providedIn: 'root'
})
export class GenresResolver implements Resolve<IGenres[]> {
  constructor(private genresService: GenresService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IGenres[]> | Promise<IGenres[]> | IGenres[] {
    return this.genresService.getGenres()
  }
}
