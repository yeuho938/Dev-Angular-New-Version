import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {
    DxButtonModule,
    DxFormModule,
    DxLoadIndicatorModule,
    DxValidationSummaryModule,
    DxValidatorModule
} from 'devextreme-angular';
import {CommonModule} from '@angular/common';
import {DxiItemModule} from 'devextreme-angular/ui/nested';
import {CreateAccountFormComponent, LoginFormComponent, AuthComponent} from '@app/modules/auth/components';
import { LoginRegisterFormComponent } from './components/login-register-form/login-register-form.component';

const COMPONENTS = [
    AuthComponent, LoginFormComponent,
    CreateAccountFormComponent
];
const DEVEXTREME_MODULES = [
    DxButtonModule,
    DxiItemModule,
    DxFormModule,
    DxLoadIndicatorModule,
    DxValidatorModule,
    DxValidationSummaryModule,
];

@NgModule({
    imports: [
        CommonModule,
        ...DEVEXTREME_MODULES,
        RouterModule.forChild([
            {
                path: 'login',
                component: LoginFormComponent,
                // canActivate: [AuthenticationService]
            },
            {
                path: 'sign-up',
                component: CreateAccountFormComponent,
                // canActivate: [AuthenticationService]
            },
            {
                path: 'login-sign',
                component: LoginRegisterFormComponent,
                // canActivate: [AuthenticationService]
            },
        ])
    ],
    declarations: [
        ...COMPONENTS,
        LoginRegisterFormComponent
    ],
    exports: [
        ...COMPONENTS
    ]
})
export class AuthModule {
}
