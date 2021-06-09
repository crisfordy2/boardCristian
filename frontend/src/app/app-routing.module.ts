import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { ListTaskComponent } from './board/list-task/list-task.component';
import { SaveTaskComponent } from './board/save-task/save-task.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { SaveUserComponent } from './admin/save-user/save-user.component';
import { SaveRoleComponent } from './admin/save-role/save-role.component';
import { UpdateRoleComponent } from './admin/update-role/update-role.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'listTask',
    component: ListTaskComponent,
  },
  {
    path: 'saveTask',
    component: SaveTaskComponent
  },
  {
    path: 'listUser',
    component: ListUserComponent
  },
  {
    path: 'listRole',
    component: ListRoleComponent
  },
  {
    path: 'saveUser',
    component: SaveUserComponent
  },
  {
    path: 'saveRole',
    component: SaveRoleComponent
  },
  {
    path: 'UpdateRole',
    component: UpdateRoleComponent
  },
  {
    path: 'UpdateUser',
    component: UpdateUserComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
