import {Component, OnInit} from '@angular/core';
import {Cart} from '@app/modules/client/models/cart.class';
import {CartService} from '@app/modules/client/services/cart.service';
import notify from 'devextreme/ui/notify';

@Component({
    selector: 'app-info-order',
    templateUrl: './info-order.component.html',
    styleUrls: ['./info-order.component.scss']
})
export class InfoOrderComponent implements OnInit {
    cartData: Cart[];
    isOpenPaymentMethod = false;
    loadingVisible: boolean;
    constructor(public cartService: CartService) {
    }

    ngOnInit() {
        this.getCartData();
    }

    getCartData() {
        this.cartService.getCartData().subscribe((item) => {
            this.cartData = item;
        });
    }

    click = e => {
        const buttonText = e.component.option('text');
        notify('Place order successfully');
    }

    onOpenListPaymentMethod() {
        this.loadingVisible = true;
        this.isOpenPaymentMethod = !this.isOpenPaymentMethod;
    }
    onShown() {
        setTimeout(() => {
            this.loadingVisible = false;
        }, 500);
    }
}
