import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';

import {ErrorComponent} from '@app/theme';

const routes: Routes = [
    {path: '', redirectTo: 'client', pathMatch: 'full'},
    {
        path: 'admin',
        loadChildren: () => import('@app/modules/admin/admin.module').then(m => m.AdminModule),
    },
    {
        path: 'client',
        loadChildren: () => import('@app/modules/client/client.module').then(m => m.ClientModule),
    },
    {path: '**', component: ErrorComponent}
];

const config: ExtraOptions = {
    useHash: false
};

@NgModule({
    imports: [RouterModule.forRoot(routes, config)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
