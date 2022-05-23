import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {IPosts} from '../../models/posts.interfaces';
import {urls} from "../../urls/urls";

@Injectable({
  providedIn: 'root'
})
export class PostsDataService {

  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Observable<IPosts[]> {
    return this.httpClient.get<IPosts[]>(urls.posts)
  }

  getPost(id: string): Observable<IPosts> {
    return this.httpClient.get<IPosts>(urls.posts + '/' + id)
  }
}
