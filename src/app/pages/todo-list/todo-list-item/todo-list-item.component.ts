import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoListItem } from './todo-list-item.class';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { ConfirmationDialogComponent } from '../../dialogs/confirmation-dialog/confirmation-dialog.component';
import { TodoService } from '../services/todo.service';
import { decorateErrorFromHttp } from '../../../@core/utils/utils';
import { CreateTodoComponent } from '../modals/create-todo/create-todo.component';

@Component({
  selector: 'ngx-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent {
  @Input() data: TodoListItem;
  @Output() updateTodoEvent: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  constructor(
    private dialogService: NbDialogService,
    private todoService: TodoService,
    private toastrService: NbToastrService
  ) {}

  editTodo() {
    this.dialogService
      .open(CreateTodoComponent, {
        context: {
          id: this.data.id,
          title: this.data.title,
          description: this.data.description,
          type: this.data.type,
          dueDate: new Date(this.data.dueDate),
          dueTime: new Date(this.data.dueDate),
          isEdit: true,
        },
      })
      .onClose.subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.updateTodoEvent.emit(true);
        }
      });
  }

  deleteTodo() {
    this.dialogService
      .open(ConfirmationDialogComponent, {
        context: {
          title: 'Are you sure to delete Todo?',
          message: 'Do you really want to perform this action?',
        },
      })
      .onClose.subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.todoService.deleteTodo(this.data.id).subscribe(
            () => {
              this.toastrService.success(
                'Todo deleted successful!',
                'Successful!'
              );
              this.updateTodoEvent.emit(true);
            },
            (error) => {
              this.toastrService.danger(
                decorateErrorFromHttp(error),
                'Failed to delete Todo!'
              );
            }
          );
        }
      });
  }
}
