import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {UsersRoutingModule} from './users-routing.module';
import {UsersComponentsComponent} from './users-components/users-components.component';
import {UserDataService} from './users.services/user-data.service';
import {UserComponent} from './user/user.component';

@NgModule({
  declarations: [
    UsersComponentsComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  exports: [
    UserComponent
  ],
  providers: [UserDataService]
})
export class UsersModule {
}
