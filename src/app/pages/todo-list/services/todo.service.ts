import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoListItem } from '../todo-list-item/todo-list-item.class';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToInstance } from 'class-transformer';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = '/api/todo';
  constructor(private httpClient: HttpClient) {}

  createTodo(todo: TodoListItem) {
    return this.httpClient.post(`${this.apiUrl}`, todo);
  }

  getTodo(): Observable<TodoListItem[]> {
    return this.httpClient
      .get<{ isSuccess: boolean; data: any[] }>(`${this.apiUrl}`)
      .pipe(
        map((data) =>
          data.data.map((_data) => plainToInstance(TodoListItem, _data))
        )
      );
  }

  deleteTodo(id: string): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}/${id}`);
  }
}
