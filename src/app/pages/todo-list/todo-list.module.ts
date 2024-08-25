import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import {
  NbButtonModule,
  NbCalendarModule,
  NbCardModule,
  NbDialogModule,
  NbIconModule,
  NbInputModule,
  NbListModule,
  NbSelectModule,
  NbTimepickerModule,
  NbUserModule,
} from '@nebular/theme';
import { CreateTodoComponent } from './modals/create-todo/create-todo.component';
import { DeleteTodoComponent } from './modals/delete-todo/delete-todo.component';
import { EditTodoComponent } from './modals/edit-todo/edit-todo.component';
import { FormsModule } from '@angular/forms';
import { ViewTodoComponent } from './modals/view-todo/view-todo.component';
import { CustomTableComponent } from './custom-table/custom-table.component';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoListItemComponent,
    CreateTodoComponent,
    DeleteTodoComponent,
    EditTodoComponent,
    ViewTodoComponent,
    CustomTableComponent,
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbListModule,
    NbUserModule,
    NbIconModule,
    NbDialogModule.forChild(),
    FormsModule,
    NbButtonModule,
    NbSelectModule,
    NbInputModule,
    NbTimepickerModule.forChild(),
    NbCalendarModule,
  ],
})
export class TodoListModule {}
