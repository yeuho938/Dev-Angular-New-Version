import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
    titleBreadcrumb = 'Checkout';
    breadcrumbItem = 'Checkout';
    loadingVisible = false;
    isOpenLoginForm = false;
    isOpenFormCoupon = false;
    simpleProducts: any[] = [
        'Select Country...',
        'Albania',
        'Angola',
        'Argentina',
        'Austria',
        'Azerbaijan',
        'Bangladesh'
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

    onShown() {
        setTimeout(() => {
            this.loadingVisible = false;
        }, 500);
    }

    onToggleOpenLogin() {
        this.loadingVisible = true;
        this.isOpenFormCoupon = false;
        this.isOpenLoginForm = !this.isOpenLoginForm;
    }

    onToggleOpenCoupon() {
        this.loadingVisible = true;
        this.isOpenLoginForm = false;
        this.isOpenFormCoupon = !this.isOpenFormCoupon;
    }
}
