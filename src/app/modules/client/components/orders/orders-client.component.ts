import {Component, OnInit} from '@angular/core';
import {OrderService} from '@app/modules/shared/services';
import {Order} from '@app/modules/shared/models';

@Component({
    selector: 'app-orders-client',
    templateUrl: './orders-client.component.html',
    styleUrls: ['./orders-client.component.scss']
})
export class OrdersClientComponent implements OnInit {
    titleBreadcrumb = 'Order';
    breadcrumbItem = 'My order';
    changeTabContent: string;
    loadingVisible: boolean;
    listOrder: Order[];
    tabContent: any[];
    tabPanelIndex: number;

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
    onToggleTab(value: string) {
        this.loadingVisible = true;
        this.changeTabContent = value;
    }

    onShown() {
        setTimeout(() => {
            this.loadingVisible = false;
        }, 1000);
    }

}
