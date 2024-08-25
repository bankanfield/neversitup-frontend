import { TodoListItemStatuses } from './todo-list-item-statuses.enum';

export class TodoListItem {
  id?: string;
  title: string;
  description: string;
  status: TodoListItemStatuses;
  dueDate: string;
}
