import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ThemeModule, RouterOutletComponent} from '@app/theme';
import {SharedModule} from '@app/shared/shared.module';
import {AdminComponent} from './components/admin/admin.component';
import {UsersComponent} from './components/users/users.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';

const PROVIDERS = [

];

@NgModule({
    imports: [
        ThemeModule,
        SharedModule,
        //
        RouterModule.forChild([
            {
                path: '',
                component: AdminComponent,
                children: [
                    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
                    {
                        path: 'dashboard',
                        component: DashboardComponent
                    },
                    {
                        path: 'users',
                        component: UsersComponent
                    },
                    // {
                    //     // To fix the top menu issue
                    //     path: 'boats',
                    //     component: RouterOutletComponent,
                    //     children: [
                    //         {path: '', redirectTo: 'partners', pathMatch: 'full'},
                    //         {
                    //             path: 'partners',
                    //             component: PartnersComponent
                    //         },
                    //         {
                    //             path: 'list',
                    //             component: BoatsComponent
                    //         },
                    //         {
                    //             path: 'schedule',
                    //             component: ScheduleComponent
                    //         }
                    //     ]
                    // },
                ]
            }
        ]),
    ],
    declarations: [
        DashboardComponent,
        AdminComponent,
        UsersComponent
    ],
    providers: [
        ...PROVIDERS
    ]
})
export class AdminModule {
}
