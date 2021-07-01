import {Component, Input, OnInit} from '@angular/core';
import {Order} from '@app/modules/shared/models';
import {OrderService} from '@app/modules/shared/services';

@Component({
    selector: 'app-list-order',
    templateUrl: './list-order.component.html',
    styleUrls: ['./list-order.component.scss']
})
export class ListOrderComponent implements OnInit {
    @Input() statusNumber: number;
    @Input() statusContent: string;
    listOrder: Order[];

    constructor(public orderService: OrderService) {
    }

    ngOnInit() {
        this.getOrder();
    }

    getOrder() {
        this.orderService.getAllOrders().subscribe((item) => {
            this.listOrder = item;
        });
    }
    OnDetail(){

    }

}
