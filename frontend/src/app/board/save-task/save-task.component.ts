import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-save-task',
  templateUrl: './save-task.component.html',
  styleUrls: ['./save-task.component.css']
})
export class SaveTaskComponent implements OnInit {

  public taskData: any;
  public errorMessagge: String;
  public img: any;  


  constructor(private board: BoardService, private router: Router) {
    this.taskData = {};
    this.errorMessagge = '';
    this.img = null;
  }

  ngOnInit(): void {
  }

  saveTask(){

    if (!this.taskData.name || !this.taskData.description) {
      console.log('Failed process: Imcomplete data');
      this.errorMessagge = 'Failed process: Imcomplete data';
      this.closeAlert();
    } else {

      this.board.saveTask(this.taskData).subscribe(
        (res)=>{
          console.log(res);
          this.taskData = {};
          this.router.navigate(['/listTask']);
        },
        (err)=>{
          console.log(err)
          this.errorMessagge = err.error;
          this.closeAlert();
        }
      )      
    }  
  }

  uploadImg(event: any){
    this.img = <File>event.target.files[0];
  }

  saveTaskImg(){
    if (!this.taskData.name || !this.taskData.description) {
      console.log('Failed process: Imcomplete data');
      this.errorMessagge = 'Failed process: Imcomplete data';
      this.closeAlert();
    } else {
      const data = new FormData()
      data.append('image', this.img, this.img.name);
      data.append('name', this.taskData.name)
      data.append('description', this.taskData.description)

      this.board.saveTaskImg(data).subscribe(
        (res)=>{
          console.log(res);
          this.taskData = {};
          this.router.navigate(['/listTask']);
        },
        (err)=>{
          console.log(err)
          this.errorMessagge = err.error;
          this.closeAlert();
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
