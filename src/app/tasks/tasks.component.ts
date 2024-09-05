import {Component, Input} from '@angular/core';
import {TasksService} from "./tasks.service";

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() userId!: string;
  @Input() name?: string;
  isAddingTaskVisible = false;

  constructor(private taskService: TasksService) {}

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  onCreateTask() {
    this.isAddingTaskVisible = true;
  }

  onCancelAddTaskDialog() {
    this.isAddingTaskVisible = false;
  }

}
