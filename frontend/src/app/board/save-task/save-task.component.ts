import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-save-task',
  templateUrl: './save-task.component.html',
  styleUrls: ['./save-task.component.css']
})
export class SaveTaskComponent implements OnInit {

  public taskData: any;
  public errorMessagge: String;  


  constructor(private auth: AuthService, private router: Router) {
    this.taskData = {};
    this.errorMessagge = '';
  }

  ngOnInit(): void {
  }

  saveTask(){
    
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
