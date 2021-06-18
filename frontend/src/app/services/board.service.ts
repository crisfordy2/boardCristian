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

  listTask(){
    return this.http.get(this.env + 'board/listTask');
  }
}
