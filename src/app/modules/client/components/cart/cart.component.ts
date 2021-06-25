import {Component, OnInit} from '@angular/core';
import {Cart} from '../../models/cart.class';
import {FlowerService} from '@app/modules/shared/services';
import {Flower} from '@app/modules/shared/models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
    titleBreadcrumb = 'Cart';
    breadcrumbItem = 'Cart';
    cartData: Flower[];
    constructor( public flowerService: FlowerService) {
  }

  ngOnInit(): void {
      this.flowerService.getFeatureFlower().subscribe((flower) => {
          this.cartData = flower;
      });
  }
}
