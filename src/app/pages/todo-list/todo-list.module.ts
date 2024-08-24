import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodoListComponent } from "./todo-list.component";
import { TodoListItemComponent } from "./todo-list-item/todo-list-item.component";
import {
  NbCardModule,
  NbIconModule,
  NbListModule,
  NbUserModule,
} from "@nebular/theme";

@NgModule({
  declarations: [TodoListComponent, TodoListItemComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbListModule,
    NbUserModule,
    NbIconModule,
  ],
})
export class TodoListModule {}
