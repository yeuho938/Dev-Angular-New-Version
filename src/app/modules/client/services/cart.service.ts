import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Cart} from '@app/modules/client/models/cart.class';
import {randomCartData} from '@app/data/client/cart.mock';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
    getCartData(): Observable<Cart[]> {
        return of(randomCartData(4));
    }
}
