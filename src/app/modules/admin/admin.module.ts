import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ThemeModule, RouterOutletComponent} from '@app/theme';
import {SharedModule} from '@app/shared/shared.module';

import {
    AdminComponent, ChartComponent, DashboardComponent,
    EditFlowersComponent, FlowersComponent, OrdersAdminComponent,
    UsersComponent
} from '@app/modules/admin/components';

const PROVIDERS = [];
const COMPONENTS = [
    AdminComponent, ChartComponent,
    DashboardComponent, EditFlowersComponent,
    FlowersComponent, OrdersAdminComponent,
    UsersComponent
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
                        path: 'flowers',
                        component: FlowersComponent
                    },
                    {
                        path: 'orders',
                        component: OrdersAdminComponent
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
        ...COMPONENTS
    ],
    providers: [
        ...PROVIDERS
    ]
})
export class AdminModule {
}
