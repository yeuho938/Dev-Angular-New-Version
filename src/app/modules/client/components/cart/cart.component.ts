import {Component, OnInit} from '@angular/core';
import {Cart} from '../../models/cart.class';
import notify from 'devextreme/ui/notify';
import {CartService} from '@app/modules/client/services/cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
    titleBreadcrumb = 'Cart';
    breadcrumbItem = 'Cart';
    cartData: Cart[];

    constructor(public cartService: CartService) {
    }

    ngOnInit(): void {
        this.getCartData();
    }

    getCartData() {
        this.cartService.getCartData().subscribe((item) => {
            this.cartData = item;
        });
    }

    click(massage: string) {
        notify(massage + 'successfully');
    }
}
