import { Component } from "@angular/core";
import { TodoListItem } from "./todo-list-item/todo-list-item.interface";
import { TodoListItemStatuses } from "./todo-list-item/todo-list-item-statuses.enum";

@Component({
  selector: "ngx-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent {
  list: TodoListItem[] = [
    {
      title: "todo1",
      description: "description1",
      status: TodoListItemStatuses.danger,
      date: "1 Oct 2023 12:03:48",
    },
    {
      title: "todo2",
      description: "description2",
      status: TodoListItemStatuses.info,
      date: "1 Oct 2023 12:03:48",
    },
    {
      title: "todo3",
      description: "description3",
      status: TodoListItemStatuses.primary,
      date: "1 Oct 2023 12:03:48",
    },
    {
      title: "todo4",
      description: "description4",
      status: TodoListItemStatuses.success,
      date: "1 Oct 2023 12:03:48",
    },
    {
      title: "todo5",
      description: "description5",
      status: TodoListItemStatuses.warning,
      date: "1 Oct 2023 12:03:48",
    },
  ];
}
