import { Component, Input } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: Todo;

  constructor(private todoService: TodoService) { }

  onStatusChange(): void {
    this.todoService.updateTodoStatus(this.todo);
  }

  onDelete(): void {
    this.todoService.deleteTodo(this.todo);
  }
}

