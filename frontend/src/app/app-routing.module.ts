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
import { AuthGuard } from './guard/auth.guard';

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
    canActivate: [AuthGuard]
  },
  {
    path: 'saveTask',
    component: SaveTaskComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'listUser',
    component: ListUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'listRole',
    component: ListRoleComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'saveUser',
    component: SaveUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'saveRole',
    component: SaveRoleComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'UpdateRole',
    component: UpdateRoleComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'UpdateUser',
    component: UpdateUserComponent,
    canActivate: [AuthGuard]
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
