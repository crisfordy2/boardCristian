import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { ListTaskComponent } from './board/list-task/list-task.component';
import { SaveTaskComponent } from './board/save-task/save-task.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { SaveUserComponent } from './admin/save-user/save-user.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { SaveRoleComponent } from './admin/save-role/save-role.component';
import { UpdateRoleComponent } from './admin/update-role/update-role.component';

import { AuthService } from "./services/auth.service";
import { BoardService } from "./services/board.service";
import { RoleService } from "./services/role.service";
import { TokenInterceptorService } from "./services/token-interceptor.service";
import { AuthGuard } from "./guard/auth.guard";

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ListTaskComponent,
    SaveTaskComponent,
    ListUserComponent,
    SaveUserComponent,
    UpdateUserComponent,
    ListRoleComponent,
    SaveRoleComponent,
    UpdateRoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,  
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatExpansionModule,
    MatTableModule,
    MatIconModule    
  ],
  providers: [AuthService, BoardService, RoleService, AuthGuard, TokenInterceptorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
