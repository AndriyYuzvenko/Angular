import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {IUsers} from '../../models/users.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private _url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<IUsers[]> {
    return this.http.get<IUsers[]>(this._url)
  }
  getUser(id:string):Observable<IUsers>{
    return this.http.get<IUsers>(this._url+'/'+id)
  }
}
