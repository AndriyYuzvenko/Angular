import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersComponentsComponent} from './users-components/users-components.component';
import {UserDetailsComponent} from "./user-details/user-details.component";
import {UsersResolver} from "./users.services/resolvers/users.resolver";
import {UserResolver} from "./users.services/resolvers/user.resolver";

const routes: Routes = [
  {
    path: '', component: UsersComponentsComponent,
    resolve: {usersData: UsersResolver},
    children: [
      {path: ':id', component: UserDetailsComponent,resolve:{userData:UserResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
