import { Component } from '@angular/core';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { TodoListItemStatuses } from '../../todo-list-item/todo-list-item-statuses.enum';
import { TodoService } from '../../services/todo.service';
import { TodoListItem } from '../../todo-list-item/todo-list-item.class';
import { decorateErrorFromHttp } from '../../../../@core/utils/utils';

@Component({
  selector: 'ngx-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss'],
})
export class CreateTodoComponent {
  title = '';
  description = '';
  status: TodoListItemStatuses = TodoListItemStatuses.primary;
  statusOptions = Object.values(TodoListItemStatuses).map((status) => ({
    label: status,
    value: status,
  }));
  dueDate = new Date();
  dueTime = new Date();

  constructor(
    protected dialogRef: NbDialogRef<CreateTodoComponent>,
    private todoService: TodoService,
    private toastService: NbToastrService
  ) {
    this.dueTime.setHours(0);
    this.dueTime.setMinutes(0);
  }

  onSubmit() {
    const payload: TodoListItem = {
      title: this.title,
      description: this.description,
      dueDate: new Date(
        this.dueDate.getFullYear(),
        this.dueDate.getMonth(),
        this.dueDate.getDate(),
        this.dueTime.getHours(),
        this.dueTime.getMinutes()
      ).toISOString(),
      status: this.status,
    };
    this.todoService.createTodo(payload).subscribe(
      () => {
        this.toastService.success(
          'Todo created successful!',
          'Successful!'
        );
        this.dialogRef.close(true);
      },
      (error) => {
        this.toastService.danger(
          decorateErrorFromHttp(error),
          'Failed to create todo!'
        );
      }
    );
  }

  close() {
    this.dialogRef.close(false);
  }
}
