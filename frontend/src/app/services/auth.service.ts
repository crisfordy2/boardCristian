import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private env: String;
  
  constructor(private http: HttpClient, private router: Router) { 
    this.env = environment.APP_URL;
  }

  registerUser(user: any){
    return this.http.post(this.env + 'user/registerUser', user)
  }

  login(user: any){
    return this.http.post(this.env + 'auth/login', user)
  }

  getToken(){
    return localStorage.getItem('token');
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
