import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {IPosts} from "../../../models/posts.interfaces";
import {PostsDataService} from "../posts-data.service";

@Injectable({
  providedIn: 'root'
})
export class PostsResolver implements Resolve<IPosts[]> {
  constructor(private postsDataService: PostsDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPosts[]> | Promise<IPosts[]> | IPosts[] {
    return this.postsDataService.getPosts()
  }
}
