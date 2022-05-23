import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IUsers} from '../../models/users.interfaces';


@Component({
  selector: 'app-users-components',
  templateUrl: './users-components.component.html',
  styleUrls: ['./users-components.component.css']
})
export class UsersComponentsComponent implements OnInit {
  users: IUsers[];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({usersData}) => this.users = usersData)
  }

}
