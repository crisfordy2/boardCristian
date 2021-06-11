import { Component, OnInit } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public dataUser: any;
  public errorMessagge: String;
  public successMessagge: String;

  constructor(private auth: AuthService, private router: RouterModule) {
    this.dataUser = {};
    this.errorMessagge = '';
    this.successMessagge = '';
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
      // console.log(this.dataUser)
      
      this.auth.registerUser(this.dataUser).subscribe(
        (res)=>{          
          console.log(res);
          this.successMessagge = 'Register user: successful'
          this.closeAlert();
          this.dataUser = {};

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
      this.successMessagge = '';
    }, 3000)
  }

  xAlert(){  
    this.errorMessagge = '';
    this.successMessagge = '';  
  }

}
