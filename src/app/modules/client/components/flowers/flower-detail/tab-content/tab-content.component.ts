import {Component, OnInit} from '@angular/core';
import {FlowerService} from '@app/modules/shared/services';
import {Flower} from '@app/modules/shared/models';
import {DATA_DETAIL, DATA_SHEET} from '@app/modules/client/shared/data-detail';

@Component({
    selector: 'app-tab-content',
    templateUrl: './tab-content.component.html',
    styleUrls: ['./tab-content.component.scss']
})
export class TabContentComponent implements OnInit {
    tabDescription: boolean = true;
    tabDataSheet: boolean;
    tabReview: boolean;
    loadingVisible = false;
    detailFlower: Flower;
    dataFeature = DATA_DETAIL;
    dataSheet = DATA_SHEET;

    constructor(public flowerService: FlowerService) {
    }

    ngOnInit() {
        this.getFlowerById();
    }

    OnToggleTab(des: boolean, data: boolean, review: boolean) {
        this.loadingVisible = true;
        this.tabDescription = des;
        this.tabDataSheet = data;
        this.tabReview = review;
    }

    getFlowerById() {
        this.flowerService.getFlowerById(1).subscribe((flower) => {
            this.detailFlower = flower;
        });
    }

    onShown() {
        setTimeout(() => {
            this.loadingVisible = false;
        }, 1000);
    }
}
