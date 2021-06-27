import { Component, OnInit } from '@angular/core';
import {WishlistService} from "@app/modules/client/services/wishlist.service";
import {Wishlist} from "@app/modules/client/models/wishlist.class";
import notify from "devextreme/ui/notify";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
    titleBreadcrumb = 'Wishlist';
    breadcrumbItem = 'Wishlist';
    wishlists: Wishlist[];
  constructor(public wishlistService: WishlistService) { }

  ngOnInit() {
      this.wishlistService.getWishlistData().subscribe((item) => {
          this.wishlists = item;
      });
  }
    click(massage: string) {
        notify(massage + 'successfully');
    }
}
