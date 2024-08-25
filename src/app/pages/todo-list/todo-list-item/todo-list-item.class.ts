import { TodoListItemTypes } from './todo-list-item-statuses.enum';

export class TodoListItem {
  id?: string;
  title: string;
  description: string;
  type: TodoListItemTypes;
  dueDate: string;
}
