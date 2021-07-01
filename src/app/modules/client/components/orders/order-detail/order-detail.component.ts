import {Component, OnInit} from '@angular/core';
import {OrderService} from '@app/modules/shared/services';
import {ActivatedRoute, Router} from '@angular/router';
import {Order} from '@app/modules/shared/models';

@Component({
    selector: 'app-order-detail',
    templateUrl: './order-detail.component.html',
    styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
    detailOrder: Order;

    constructor(public orderService: OrderService, public activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.getFOrderById();
    }

    getFOrderById() {
        const id = (+this.activatedRoute.snapshot.params.id);
        this.orderService.getOrderById(id).subscribe((order) => {
            this.detailOrder = order;
        });
    }
}
