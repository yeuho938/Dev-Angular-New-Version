import {Component, Input, OnInit} from '@angular/core';
import {FlowerService} from '@app/modules/shared/services';
import {Flower} from '@app/modules/shared/models';
import {SOCIAL_ICON} from '@app/modules/client/shared/social-icon';
import notify from "devextreme/ui/notify";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-flower-detail',
    templateUrl: './flower-detail.component.html',
    styleUrls: ['./flower-detail.component.scss']
})
export class FlowerDetailComponent implements OnInit {
    @Input() titleBreadcrumb = 'Detail Flower page';
    @Input() breadcrumbItem = 'Detail flower';
    socialIcon = SOCIAL_ICON;
    detailFlower: Flower;

    constructor(public flowerService: FlowerService, public activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.getFlowerById();
    }

    getFlowerById() {
        const id = (+this.activatedRoute.snapshot.params.id);
        this.flowerService.getFlowerById(id).subscribe((flower) => {
            this.detailFlower = flower;
        });
    }

    click = e => {
        const buttonText = e.component.option('text');
        notify('Add the flower to cart successfully');
    }
    onclickHeart = e => {
        const buttonText = e.component.option('text');
        notify('Add a flower to wishlist successfully');
    }
}
