import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { random } from 'lodash';
import {randomOrderById, randomOrders} from '@app/data/client/order.mock';
import {Flower, Order} from '../models';
import { LoadParamModel, LoadResultModel } from '../models/Load';
import {randomEightFlowers} from "@app/data/admin/flower.mock";
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }
  getOrders(param: LoadParamModel): Observable<LoadResultModel<Order[]>> {
    return of({
      data: randomOrders(30),
      totalCount: random(50, 100)
    });
  }
  getOrderById(param: number): Observable<Order> {
    return of(randomOrderById(param));
  }
  deleteOrder(param: number): Observable<boolean> {
    return of(true);
  }
    getAllOrders(): Observable<Order[]> {
        return of(randomOrders(5));
    }
}


