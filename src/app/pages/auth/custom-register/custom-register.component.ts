import { Component } from '@angular/core';
import { NbRegisterComponent } from '@nebular/auth';

@Component({
  selector: 'ngx-custom-register',
  templateUrl: './custom-register.component.html',
  styleUrls: ['./custom-register.component.scss'],
})
export class CustomRegisterComponent extends NbRegisterComponent {}
