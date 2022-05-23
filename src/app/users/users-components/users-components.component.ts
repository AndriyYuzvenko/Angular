import {Component, OnInit} from '@angular/core';

import {UserDataService} from '../users.services/user-data.service';
import {IUsers} from '../../models/users.interfaces';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-users-components',
  templateUrl: './users-components.component.html',
  styleUrls: ['./users-components.component.css']
})
export class UsersComponentsComponent implements OnInit {
  users: IUsers[];

  constructor(private userDataService: UserDataService,
              private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({usersData})=>this.users = usersData)
  }

}
