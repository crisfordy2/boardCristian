import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public dataUser: any;
  public errorMessagge: String;  

  constructor(private auth: AuthService, private router: Router) {
    this.dataUser = {};
    this.errorMessagge = '';  
  }

  ngOnInit(): void {
  }

  registerUser(){

    if (!this.dataUser.name || !this.dataUser.email || !this.dataUser.password) {      
      console.log('Failed process: Incomplete data')
      this.errorMessagge = 'Failed process: Incomplete data';
      this.closeAlert();
      this.dataUser = {};
    } else {  
      this.auth.registerUser(this.dataUser).subscribe(
        (res: any)=>{          
          console.log(res);          
          this.dataUser = {};          
          localStorage.setItem("token", res.tokenJWT);
          this.router.navigate(['/listTask']);
        },
        (err)=>{          
          console.log(err);
          this.errorMessagge = err.error;
          this.closeAlert();
          this.dataUser = {};
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
