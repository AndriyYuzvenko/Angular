import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersComponentsComponent} from './users-components/users-components.component';
import {UserDetailsComponent} from "./user-details/user-details.component";

const routes: Routes = [
  {
    path: '', component: UsersComponentsComponent,
    children: [{
      path:'user-details/:id',component:UserDetailsComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
