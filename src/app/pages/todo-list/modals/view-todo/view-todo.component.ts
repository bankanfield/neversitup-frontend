import { Component } from '@angular/core';
import { TodoListItem } from '../../todo-list-item/todo-list-item.class';

@Component({
  selector: 'ngx-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.scss'],
})
export class ViewTodoComponent {
  data: TodoListItem;
}
