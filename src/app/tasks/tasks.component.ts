import {Component, Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {NgForOf, NgIf} from "@angular/common";
import {NewTaskComponent} from "./new-task/new-task.component";
import {TasksService} from "./tasks.service";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NgIf,
    NgForOf,
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() userId!: string;
  @Input() name?: string;
  isAddingTaskVisible = false;
  private tasksService: TasksService;

  constructor(taskService: TasksService) {
    this.tasksService = taskService;
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCreateTask() {
    this.isAddingTaskVisible = true;
  }

  onCancelAddTaskDialog() {
    this.isAddingTaskVisible = false;
  }

}
