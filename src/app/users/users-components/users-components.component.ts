import {Component, OnInit} from '@angular/core';

import {UserDataService} from '../users.services/user-data.service';
import {IUsers} from '../../models/users.interfaces';

@Component({
  selector: 'app-users-components',
  templateUrl: './users-components.component.html',
  styleUrls: ['./users-components.component.css']
})
export class UsersComponentsComponent implements OnInit {
  users: IUsers[];

  constructor(private userDataService: UserDataService) {
  }

  ngOnInit(): void {
    this.userDataService.getUsers().subscribe(value => this.users = value)
  }

}
