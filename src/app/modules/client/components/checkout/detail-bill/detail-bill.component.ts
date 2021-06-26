import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-detail-bill',
    templateUrl: './detail-bill.component.html',
    styleUrls: ['./detail-bill.component.scss']
})
export class DetailBillComponent implements OnInit {
    checkBoxShipAddress = false;
    checkBoxCreateAccount: boolean;
    loadingVisible = true;
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

    ngOnInit() {
    }

    onShown() {
        setTimeout(() => {
            this.loadingVisible = false;
        }, 500);
    }
}
