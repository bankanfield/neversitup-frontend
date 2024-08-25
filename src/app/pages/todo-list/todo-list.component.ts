import { Component, OnInit } from '@angular/core';
import { TodoListItem } from './todo-list-item/todo-list-item.class';
import { CreateTodoComponent } from './modals/create-todo/create-todo.component';
import { NbDialogService } from '@nebular/theme';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'ngx-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoList: TodoListItem[] = [];
  completedList: TodoListItem[] = [];

  constructor(
    private dialogService: NbDialogService,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.loadTodo();
  }

  loadTodo() {
    this.todoService.getTodo().subscribe(
      (response) => {
        this.todoList = response.filter((todo)=>(!todo.completed));
        this.completedList = response.filter((todo)=>(todo.completed));
      },
      (error) => {
        console.error('Error loading data:', error);
      }
    );
  }

  openCreateTodoModal() {
    this.dialogService
      .open(CreateTodoComponent)
      .onClose.subscribe((success: boolean) => {
        if (success) {
          this.loadTodo();
        }
      });
  }
}
