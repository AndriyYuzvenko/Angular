import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {IComments} from '../../models/comments.interfaces';
import {urls} from "../../urls/urls";

@Injectable({
  providedIn: 'root'
})
export class CommentsDataService {

  constructor(private httpClient: HttpClient) {
  }

  getComments(): Observable<IComments[]> {
    return this.httpClient.get<IComments[]>(urls.comments)
  }

  getComment(id: string): Observable<IComments> {
    return this.httpClient.get<IComments>(urls.comments + '/' + id)
  }
}
