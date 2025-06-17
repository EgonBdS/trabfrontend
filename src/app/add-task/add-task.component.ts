import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
})
export class AddTaskComponent {
  title: string = '';

  constructor(private taskService: TaskService, private router: Router) {}

  addTask(): void {
    if (this.title.trim()) {
      this.taskService.addTask(this.title.trim());
      this.router.navigate(['/list']);
    }
  }
}