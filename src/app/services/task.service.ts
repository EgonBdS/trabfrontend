import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private nextId = 1;

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string): void {
    const newTask: Task = { id: this.nextId++, title, done: false };
    this.tasks.push(newTask);
  }

  toggleDone(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.done = !task.done;
  }
}