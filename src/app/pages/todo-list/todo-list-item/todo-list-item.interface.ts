import { TodoListItemStatuses } from "./todo-list-item-statuses.enum";

export interface TodoListItem {
  title: string;
  description: string;
  status: TodoListItemStatuses;
  date: string;
}
