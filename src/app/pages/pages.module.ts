import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { TodoListModule } from './todo-list/todo-list.module';
import { AuthModule } from './auth/auth.module';
import { ConfirmationDialogComponent } from './dialogs/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    TodoListModule,
    AuthModule,
    NbCardModule,
    NbButtonModule,
  ],
  declarations: [PagesComponent, ConfirmationDialogComponent],
})
export class PagesModule {}
