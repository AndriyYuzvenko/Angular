import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {PostsDataService} from "../posts-data.service";
import {IPosts} from "../../../models/posts.interfaces";

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<IPosts> {
  constructor(private postsDataService: PostsDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPosts> | Promise<IPosts> | IPosts {
    let id = route.params['id']
    return this.postsDataService.getPost(id)
  }
}
