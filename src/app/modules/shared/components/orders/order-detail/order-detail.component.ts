import { CommonModule } from '@angular/common';
import {Component, EventEmitter, Input, NgModule, OnInit, Output} from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';
import { Order } from '../../../models';
import { OrderService } from '../../../services';
import {SharedModule} from "@app/shared/shared.module";
@Component({
  selector: 'order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  private _visible: boolean = false;
  detailOrder: Order = new Order();
  @Output() onSuccess = new EventEmitter<Order>();
  @Input() selectedOrder: Order = new Order();
  //
  @Input()
  get visible(): boolean {
    return this._visible;
  }

  set visible(value: boolean) {
    this._visible = value;
    this.visibleChange.emit(value);
  }

  @Output() visibleChange = new EventEmitter();

  constructor(public orderService: OrderService) {
  }

  ngOnInit(): void {
    if (this.selectedOrder.id) {
      this.orderService.getOrderById(this.selectedOrder.id).subscribe((result) => {
        this.detailOrder = result;
      });
    }
  }
}
@NgModule({
  imports: [
    CommonModule, SharedModule, DxDataGridModule
  ],
  declarations: [OrderDetailComponent],
  exports: [OrderDetailComponent]
})
export class OrderDetailModule { }
