import { RouterOutlet } from '@angular/router';
import { Component, signal } from '@angular/core';
import { TaskForm } from './task-form/task-form';
import { TaskList } from './task-list/task-list';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskForm, TaskList, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task-manage');
}