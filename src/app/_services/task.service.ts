import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { appConfig } from '../app.config';
import { Task } from '../_models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public uid: any;

  constructor(private http: HttpClient) { 
  }

  getUserId() {
    const user = JSON.parse(localStorage.getItem('userId'));
    this.uid = user.id;
  }
  getTasks() {
    return this.http.get(appConfig.apiUrl + `tasks/${this.uid}`);
  }
  createTask(task: Task) {
    return this.http.post(appConfig.apiUrl + `tasks/${this.uid}`, task);
  }

  updateTask(task: Task) {
    return this.http.put(appConfig.apiUrl + `tasks/${this.uid}/${task.id}`, task);
  }

  deleteTask(id: number) {
    return this.http.delete(appConfig.apiUrl + `tasks/${this.uid}/${id}`);
  }
}
