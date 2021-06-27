import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {randomCartData} from '@app/data/client/cart.mock';
import {Wishlist} from '@app/modules/client/models/wishlist.class';
import {randomWishlistData} from '@app/data/client/wishlist.mock';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor() { }
    getWishlistData(): Observable<Wishlist[]> {
        return of(randomWishlistData(4));
    }
}
