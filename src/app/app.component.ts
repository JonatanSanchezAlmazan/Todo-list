import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HeaderComponent } from './shared/components/header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TodoListComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-list';
}
