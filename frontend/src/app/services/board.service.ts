import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private env: String;

  constructor(private http: HttpClient) {
    this.env = environment.APP_URL;
  }

  saveTask(task: any){
    return this.http.post<any>(this.env + 'board/saveTask', task);
  }

  saveTaskImg(task: any){
    return this.http.post<any>(this.env + 'board/saveTaskImg', task);
  }

  listTask(){
    return this.http.get<any>(this.env + 'board/listTask');
  }

  updateTask(board: any){
    return this.http.put(this.env + 'board/updateTask', board);
  }

  deleteTask(board: any){
    return this.http.delete(this.env + 'board/deleteTask/' + board._id);
  }
}
