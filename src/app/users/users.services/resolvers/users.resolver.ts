import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {IUsers} from "../../../models/users.interfaces";
import {UserDataService} from "../user-data.service";

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<IUsers[]> {

  constructor(private userDataService:UserDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUsers[]> | Promise<IUsers[]> | IUsers[] {
    return this.userDataService.getUsers()
  }
}
