import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input() userId!: string;
  @Output() cancel = new EventEmitter<boolean>();
  titleNewTask = '';
  summaryNewTask = '';
  dateNewTask = '';

  constructor(private taskService: TasksService) {}

  onCancel() {
    this.cancel.emit(false);
  }

  onSubmit() {
    this.taskService.addTask({
        title: this.titleNewTask,
        summary: this.summaryNewTask,
        date: this.dateNewTask
      },
      this.userId
    );
    this.onCancel();
  }
}
