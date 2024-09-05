import {Component, Input} from '@angular/core';
import {Task} from '../../model/task.model';
import {CardComponent} from "../../ui/card/card.component";
import {DatePipe} from "@angular/common";
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CardComponent,
    DatePipe
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!: Task;
  private tasksService: TasksService;

  constructor(taskService: TasksService) {
    this.tasksService = taskService;
  }

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
