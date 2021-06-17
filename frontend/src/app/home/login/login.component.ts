import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginData: any;
  public errorMessagge: String;  

  constructor(private auth: AuthService, private router: Router) {
    this.loginData = {};
    this.errorMessagge = '';
  }

  ngOnInit(): void {
  }

  login(){

    if (!this.loginData.email || !this.loginData.password) {
      console.log('Imcomplete data')
      this.errorMessagge = 'Imcomplete data';
      this.closeAlert();
      this.loginData = {};
      
    } else {
      this.auth.login(this.loginData).subscribe(
        (res: any)=>{
          console.log(res);
          localStorage.setItem('token', res.tokenJWT);
          this.loginData = {};
          this.router.navigate(['/listTask']);
        },
        (err)=>{
          console.log(err.error)
          this.errorMessagge = err.error;
          this.closeAlert();
          this.loginData = {};
        }
      )      
    }
  }

  closeAlert(){
    setTimeout(()=>{
      this.errorMessagge = '';      
    }, 3000)
  }

  xAlert(){  
    this.errorMessagge = '';    
  }

}
