import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule } from '@nebular/auth';
import { NbButtonModule, NbInputModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { CustomLoginComponent } from './custom-login/custom-login.component';
import { CustomRegisterComponent } from './custom-register/custom-register.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CustomLoginComponent, CustomRegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    NbInputModule,
    NbButtonModule,
    NbAuthModule,
    RouterModule,
  ],
})
export class AuthModule {}
