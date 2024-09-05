import {Component, Input} from '@angular/core';
import {Task} from '../../model/task.model';
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!: Task;

  constructor(private taskService: TasksService) {}

  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
  }
}
