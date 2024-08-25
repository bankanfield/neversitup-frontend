import { Component, Input } from '@angular/core';
import { TodoListItem } from './todo-list-item.class';

@Component({
  selector: 'ngx-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent {
  @Input() data: TodoListItem;

  editTodo() {}

  deleteTodo() {}
}
