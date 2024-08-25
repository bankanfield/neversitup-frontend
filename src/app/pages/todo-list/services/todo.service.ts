import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoListItem } from '../todo-list-item/todo-list-item.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = '/api/todo';
  constructor(private httpClient: HttpClient) {}

  createTodo(todo: TodoListItem) {
    return this.httpClient.post(`${this.apiUrl}`, todo);
  }
}
