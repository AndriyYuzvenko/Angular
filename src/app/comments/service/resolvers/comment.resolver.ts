import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';

import {IComments} from "../../../models/comments.interfaces";
import {CommentsDataService} from "../comments-data.service";

@Injectable({
  providedIn: 'root'
})
export class CommentResolver implements Resolve<IComments> {
  constructor(private commentsDataService: CommentsDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComments> | Promise<IComments> | IComments {
    let id = route.params['id']
    return this.commentsDataService.getComment(id)
  }
}
