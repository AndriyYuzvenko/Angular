import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {IUsers} from '../../models/users.interfaces';
import {urls} from "../../urls/urls";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<IUsers[]> {
    return this.http.get<IUsers[]>(urls.users)
  }

  getUser(id: string): Observable<IUsers> {
    return this.http.get<IUsers>(urls.users + '/' + id)
  }
}
