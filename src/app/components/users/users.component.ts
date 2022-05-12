import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {IUser} from "../../models/iUser";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private userService: UserService) {
  }

  users: IUser[];


  ngOnInit() {
    this.userService.getUsers()
      .subscribe(value=> this.users = value)
  }

}
