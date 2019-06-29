import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService} from '../_services/task.service';
import { Task } from '../_models/task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @ViewChild('btnClose') btnClose: ElementRef;
  @ViewChild('taskForm') taskForm: NgForm;

  public toDoTask: Task[] = [];
  public inProgressTask: Task[] = [];
  public completedTask: Task[] = [];
  public model =  new Task();

  constructor(public taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getUserId();
    this.getTasks();
  }

  getTasks() {
    this.toDoTask = [];
    this.inProgressTask = [];
    this.completedTask = [];
    this.taskService.getTasks().subscribe((data: any) => {
      const allTasks = data;
      console.log(data);
      allTasks.filter(element => {
        if (element.status === 0) {
          this.toDoTask.push(element);
        } else if (element.status === 1) {
          this.inProgressTask.push(element);
        } else {
          this.completedTask.push(element);
        }
      });
    }, error => {
      console.log(error);
    });
  }

  saveTask() {

    if ( this.model.id == null) {
      this.taskService.createTask(this.model).subscribe(() => {
        this.getTasks();
        this.model = new Task();
        this.btnClose.nativeElement.click();
      });
    } else {
      this.taskService.updateTask(this.model).subscribe(() => {
        this.getTasks();
        this.model = new Task();
        this.btnClose.nativeElement.click();
      });
    }
    }
  editTask(task) {
    this.model = task;
  }
  deleteTask(id) {
    this.taskService.deleteTask(id).subscribe(() => {
      alert('Task Delete Successfully!!!');
      this.getTasks();
    });
  }
  }



