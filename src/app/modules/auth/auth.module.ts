import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthComponent } from './components/auth.component';
import { AuthenticationService } from './services/authentication.service';
import { DxButtonModule, DxFormModule } from 'devextreme-angular';
import { CommonModule } from '@angular/common';
import { DxiItemModule } from 'devextreme-angular/ui/nested';

const COMPONENTS = [
  AuthComponent, LoginFormComponent
];


@NgModule({
  imports: [
    CommonModule,
    DxButtonModule,
    DxiItemModule,
    DxFormModule,
    RouterModule.forChild([
      {
        path: 'login',
        component: LoginFormComponent,
        canActivate: [AuthenticationService]
      }
    ])
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class AuthModule {
}
