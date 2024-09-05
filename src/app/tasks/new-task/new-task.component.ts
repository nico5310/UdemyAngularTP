import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input() userId!: string;
  @Output() cancel = new EventEmitter<boolean>();
  titleNewTask = '';
  summaryNewTask = '';
  dateNewTask = '';
  private tasksService: TasksService;

  constructor(taskService: TasksService) {
    this.tasksService = taskService;
  }

  onCancel() {
    this.cancel.emit(false);
  }

  onSubmit() {
    this.tasksService.addTask({
        title: this.titleNewTask,
        summary: this.summaryNewTask,
        date: this.dateNewTask
      },
      this.userId
    );
    this.onCancel();
  }
}
