import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {UserDataService} from "../user-data.service";
import {IUsers} from "../../../models/users.interfaces";

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<IUsers> {
  constructor(private userDataService:UserDataService,) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUsers> | Promise<IUsers> | IUsers {
    let id = route.params['id']
    return this.userDataService.getUser(id)
  }
}
