import { Component } from '@angular/core';
import { TodoListItem } from './todo-list-item/todo-list-item.interface';
import { TodoListItemStatuses } from './todo-list-item/todo-list-item-statuses.enum';
import { CreateTodoComponent } from './modals/create-todo/create-todo.component';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  list: TodoListItem[] = [
    {
      title: 'todo1',
      description: 'description1',
      status: TodoListItemStatuses.danger,
      dueDate: '2024-08-25T09:49:38.914Z',
    },
    {
      title: 'todo2',
      description: 'description2',
      status: TodoListItemStatuses.info,
      dueDate: '2024-08-25T09:49:38.914Z',
    },
    {
      title: 'todo3',
      description: 'description3',
      status: TodoListItemStatuses.primary,
      dueDate: '2024-08-25T09:49:38.914Z',
    },
    {
      title: 'todo4',
      description: 'description4',
      status: TodoListItemStatuses.success,
      dueDate: '2024-08-25T09:49:38.914Z',
    },
    {
      title: 'todo5',
      description: 'description5',
      status: TodoListItemStatuses.warning,
      dueDate: '2024-08-25T09:49:38.914Z',
    },
  ];

  constructor(private dialogService: NbDialogService) {}

  openCreateTodoModal() {
    this.dialogService
      .open(CreateTodoComponent)
      .onClose.subscribe((itemName: string) => {
        if (itemName) {
          console.log('New item created:', itemName);
        }
      });
  }
}
