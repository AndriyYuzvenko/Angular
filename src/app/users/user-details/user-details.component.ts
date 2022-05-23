import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IUsers} from "../../models/users.interfaces";


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input()
  userDetails: IUsers

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({userData}) => this.userDetails = userData)
  }

}
