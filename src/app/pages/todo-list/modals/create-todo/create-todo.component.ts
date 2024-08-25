import { Component } from '@angular/core';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { TodoListItemTypes } from '../../todo-list-item/todo-list-item-statuses.enum';
import { TodoService } from '../../services/todo.service';
import { TodoListItem } from '../../todo-list-item/todo-list-item.class';
import { decorateErrorFromHttp } from '../../../../@core/utils/utils';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ngx-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss'],
})
export class CreateTodoComponent {
  id?: string;
  title = '';
  description = '';
  type: TodoListItemTypes = TodoListItemTypes.primary;
  typeOptions = Object.values(TodoListItemTypes).map((type) => ({
    label: type,
    value: type,
  }));
  dueDate = new Date();
  dueTime = new Date();
  isEdit = false;
  dueDateDirty = false;

  constructor(
    protected dialogRef: NbDialogRef<CreateTodoComponent>,
    private todoService: TodoService,
    private toastService: NbToastrService
  ) {
    this.dueTime.setHours(0);
    this.dueTime.setMinutes(0);
  }

  createTodo() {
    const payload: TodoListItem = {
      title: this.title,
      description: this.description,
      dueDate: this.getISODate(),
      type: this.type,
      completed: false,
    };
    this.todoService.createTodo(payload).subscribe(
      () => {
        this.toastService.success('Edit Todo successfully!', 'Success!');
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

  getISODate() {
    return new Date(
      this.dueDate.getFullYear(),
      this.dueDate.getMonth(),
      this.dueDate.getDate(),
      this.dueTime.getHours(),
      this.dueTime.getMinutes()
    ).toISOString();
  }

  dueDateChange() {
    this.dueDateDirty = true;
  }

  editTodo(form: NgForm) {
    const dirtyFields: Partial<TodoListItem> = {};
    Object.keys(form.controls).forEach((key) => {
      const control = form.controls[key];
      if (control.dirty) {
        if (key === 'dueTime') {
          dirtyFields.dueDate = this.getISODate();
        } else {
          dirtyFields[key] = control.value;
        }
      }
    });
    if (this.dueDateDirty) {
      dirtyFields.dueDate = this.getISODate();
    }
    this.todoService.editTodo(this.id, dirtyFields).subscribe(
      () => {
        this.toastService.success('Edit Todo successfully!', 'Success!');
        this.dialogRef.close(true);
      },
      (error) => {
        this.toastService.danger(
          decorateErrorFromHttp(error),
          'Failed to edit todo!'
        );
      }
    );
  }

  onSubmit(form: NgForm) {
    if (this.isEdit) {
      this.editTodo(form);
    } else {
      this.createTodo();
    }
  }

  close() {
    this.dialogRef.close(false);
  }
}
