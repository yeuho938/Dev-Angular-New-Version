import {Component, OnInit} from '@angular/core';
import {Cart} from '@app/modules/client/models/cart.class';
import {CartService} from '@app/modules/client/services/cart.service';

@Component({
    selector: 'app-cart-box',
    templateUrl: './cart-box.component.html',
    styleUrls: ['./cart-box.component.scss']
})
export class CartBoxComponent implements OnInit {
    cartData: Cart[];
    cartTotal: number;

    constructor(public cartService: CartService) {
    }

    ngOnInit(): void {
        this.cartService.getCartData().subscribe((item) => {
            this.cartData = item;
        });
        this.cartTotal = 0;
        this.cartData.forEach(item => {
            this.cartTotal += (item.quantity * item.price);
        });
    }
}
