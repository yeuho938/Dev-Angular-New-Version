import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@app/shared/shared.module';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './shared/components/header/header.component';

import {
    CartComponent, CheckoutComponent, FlowerDetailComponent, WishlistComponent,
    FlowersComponent, HomepageComponent, ListFlowersComponent, OrdersClientComponent,
    ClientComponent, BannerComponent, LatestBlogComponent, FeatureFlowerComponent,
    LeftSidebarComponent, CommentReplyComponent, TabContentComponent,
    InfoOrderComponent, DetailBillComponent, TestimonialComponent
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
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { ListBlogComponent } from './components/blog/list-blog/list-blog.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ListOrderComponent } from './components/orders/list-order/list-order.component';
import {AuthModule} from '@app/modules/auth/auth.module';
import {LoginFormComponent} from '@app/modules/auth/components/login-form/login-form.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AccountComponent } from './components/profile/account/account.component';
import { OrderDetailComponent } from './components/orders/order-detail/order-detail.component';


const COMPONENTS = [
    CartComponent, LeftSidebarComponent,
    FlowersComponent, CommentReplyComponent,
    CheckoutComponent, TabContentComponent,
    ListFlowersComponent, FlowerDetailComponent,
    HomepageComponent, TestimonialComponent,
    OrdersClientComponent, HeaderComponent,
    ClientComponent, BannerComponent,
    LatestBlogComponent, FeatureFlowerComponent,
    InfoOrderComponent, DetailBillComponent, WishlistComponent
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
        ContactComponent,
        BlogComponent,
        ListBlogComponent,
        AboutUsComponent,
        ListOrderComponent,
        ProfileComponent,
        AccountComponent,
        OrderDetailComponent
    ],
    exports: [
        HeaderComponent,
    ],

    imports: [
        CommonModule,
        SharedModule,
        ThemeModule,
        AuthModule,
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
                        path: 'wishlist',
                        component: WishlistComponent
                    },
                    {
                        path: 'order',
                        component: OrdersClientComponent,
                    },
                    {
                        path: 'blog',
                        component: BlogComponent,
                    },
                    {
                        path: 'contact',
                        component: ContactComponent,
                    },
                    {
                        path: 'about',
                        component: AboutUsComponent,
                    },
                    {
                        path: 'login',
                        component: LoginFormComponent,
                    },
                    {
                        path: 'profile',
                        component: ProfileComponent,
                    },
                    {
                        path: 'order/:id',
                        component: OrderDetailComponent,
                    },
                ]
            }
        ]),
    ]
})
export class ClientModule {
}
