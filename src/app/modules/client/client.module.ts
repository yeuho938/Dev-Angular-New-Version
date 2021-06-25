import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@app/shared/shared.module';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './shared/components/header/header.component';

import {
    CartComponent, CheckoutComponent, ContentComponent, FlowerDetailComponent,
    FlowersComponent, HomepageComponent, ListFlowersComponent, OrdersClientComponent,
    ClientComponent, BannerComponent, LatestBlogComponent, FeatureFlowerComponent,
    LeftSidebarComponent, CommentReplyComponent, TabContentComponent
} from './components';
import {
    DxMenuModule, DxSelectBoxModule,
    DxCheckBoxModule, DxButtonModule,
    DxToolbarModule, DxGalleryModule,
    DxDataGridModule, DxListModule,
    DxTextBoxModule, DxFormModule,
    DxNumberBoxModule, DxDateBoxModule,
    DxValidatorModule, DxValidationGroupModule, DxPopupModule
} from 'devextreme-angular';

import {ThemeModule} from '@app/theme';
import {TestimonialComponent} from './components/homepage/testimonial/testimonial.component';

const COMPONENTS = [
    CartComponent, LeftSidebarComponent,
    FlowersComponent, CommentReplyComponent,
    CheckoutComponent, TabContentComponent,
    ListFlowersComponent, FlowerDetailComponent,
    HomepageComponent, ContentComponent,
    OrdersClientComponent, HeaderComponent,
    ClientComponent, BannerComponent,
    LatestBlogComponent, FeatureFlowerComponent
];
const DEVEXTREME_MODULES = [
    DxMenuModule, DxSelectBoxModule,
    DxCheckBoxModule, DxButtonModule,
    DxToolbarModule, DxGalleryModule,
    DxDataGridModule, DxListModule,
    DxTextBoxModule, DxFormModule,
    DxNumberBoxModule, DxDateBoxModule,
    DxValidatorModule, DxValidationGroupModule,
    DxPopupModule
];

@NgModule({
    declarations: [
        ...COMPONENTS,
        TestimonialComponent,
    ],
    exports: [
        HeaderComponent,
    ],

    imports: [
        CommonModule,
        SharedModule,
        ThemeModule,
        ...DEVEXTREME_MODULES,
        RouterModule.forChild([
            {
                path: '',
                component: ClientComponent,
                children: [
                    {path: '', redirectTo: 'homepage', pathMatch: 'full'},
                    {
                        path: 'homepage',
                        component: HomepageComponent
                    },
                    {
                        path: 'flowers',
                        component: ListFlowersComponent,
                    },
                    {
                        path: 'flowers/:id',
                        component: FlowerDetailComponent,
                    },
                    {
                        path: 'cart',
                        component: CartComponent
                    },
                    {
                        path: 'checkout',
                        component: CheckoutComponent
                    },
                    {
                        path: 'order',
                        component: OrdersClientComponent,
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
    ]
})
export class ClientModule {
}