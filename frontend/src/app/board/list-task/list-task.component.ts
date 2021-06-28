import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {
  public tasksData: any;
  public errorMessagge: String;  
  public successMessagge: String;    

  constructor(private board: BoardService, private router: Router) {
    this.tasksData = {};
    this.errorMessagge = '';
    this.successMessagge = '';    
  }

  ngOnInit(): void {
    this.board.listTask().subscribe(
      (res)=>{
        console.log(res.board)
        this.tasksData = res.board;
      },
      (err)=>{
        this.errorMessagge = err.error;
        this.closeAlert();
      }
    )
  }

  updateTask(task:any, status: String){
    const tempStatus = task.status;
    task.status = status;
    this.board.updateTask(task).subscribe(
      (res)=>{
        task.status = status;
      },
      (err)=>{
        task.status = tempStatus;
        this.errorMessagge = err.error;
        this.closeAlert();
      }
    )
  }

  deleteTask(task: any){        
    this.board.deleteTask(task).subscribe(
      (res)=>{
        const index = this.tasksData.indexOf(task);
        console.log(index)
        this.tasksData.splice(index, 1);
        this.successMessagge = 'Delete Task';
        this.closeAlert();
      },
      (err)=>{        
        this.errorMessagge = err.error;
        this.closeAlert();
      }
    )
  }

  closeAlert(){
    setTimeout(()=>{
      this.successMessagge = '';
      this.errorMessagge = '';      
    }, 3000)
  }

  xAlert(){  
    this.successMessagge = '';
    this.errorMessagge = '';    
  }

}
