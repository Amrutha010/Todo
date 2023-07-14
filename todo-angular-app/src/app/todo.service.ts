import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];

  constructor() { }

  createTodo(todo: Todo): void {
    this.todos.push(todo);
  }

  updateTodoStatus(todo: Todo): void {
    const foundIndex = this.todos.findIndex(t => t.id === todo.id);
    if (foundIndex !== -1) {
      this.todos[foundIndex].completed = todo.completed;
    }
  }

  deleteTodo(todo: Todo): void {
    const foundIndex = this.todos.findIndex(t => t.id === todo.id);
    if (foundIndex !== -1) {
      this.todos.splice(foundIndex, 1);
    }
  }

  getTodos(): Todo[] {
    return this.todos;
  }
}
