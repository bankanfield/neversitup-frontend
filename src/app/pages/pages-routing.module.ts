import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CustomTableComponent } from './todo-list/custom-table/custom-table.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'todo-list',
        component: TodoListComponent,
      },
      {
        path: 'custom-table',
        component: CustomTableComponent,
      },
      {
        path: '',
        redirectTo: 'todo-list',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
