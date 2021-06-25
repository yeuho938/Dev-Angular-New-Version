import {Component, OnInit} from '@angular/core';
import {LIST_CATE, LIST_COLOR, LIST_HOT_TAG, LIST_SIZE} from '@app/modules/client/shared/data-sidebar';
import {FlowerService} from '@app/modules/shared/services';
import {Flower} from '@app/modules/shared/models';

@Component({
    selector: 'app-left-sidebar',
    templateUrl: './left-sidebar.component.html',
    styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {
    listColors = LIST_COLOR;
    listCate = LIST_CATE;
    listHotTags = LIST_HOT_TAG;
    listSize = LIST_SIZE;
    bestFlower: Flower[];

    constructor(public flowerService: FlowerService) {
    }

    ngOnInit() {
        this.getBestFlowers();
    }

    getBestFlowers() {
        this.flowerService.getFeatureFlower().subscribe((flower) => {
            this.bestFlower = flower;
        });
    }
}
