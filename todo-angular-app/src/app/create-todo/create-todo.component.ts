import { Component } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent {
  newTodo: Todo = {
    id: 0,
    title: '',
    description: '',
    completed: false
  };

  constructor(private todoService: TodoService) { }

  onSubmit(): void {
    this.todoService.createTodo(this.newTodo);
    this.newTodo = {
      id: 0,
      title: '',
      description: '',
      completed: false
    };
  }
}
