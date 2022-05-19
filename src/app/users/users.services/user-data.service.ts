import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {IUsers} from '../../models/users.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private _url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<IUsers[]> {
    return this.httpClient.get<IUsers[]>(this._url)
  }
}
