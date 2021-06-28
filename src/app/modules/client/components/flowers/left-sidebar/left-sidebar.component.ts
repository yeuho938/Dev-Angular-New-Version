import {Component, Input, OnInit} from '@angular/core';
import {LIST_CATE, LIST_COLOR, LIST_HOT_TAG, LIST_SIZE} from '@app/modules/client/shared/data-sidebar';
import {FlowerService} from '@app/modules/shared/services';
import {Flower} from '@app/modules/shared/models';
import {BlogService} from "@app/modules/client/services/blog.service";
import {Blog} from "@app/modules/client/models/blog.class";

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

    @Input() isBlogPage = false;
    bestFlower: Flower[];
    latestBlogs: Blog[];

    constructor(public flowerService: FlowerService, public blogService: BlogService) {
    }

    ngOnInit() {
        this.getBestFlowers();
        this.getLatestBlogs();
    }

    getBestFlowers() {
        this.flowerService.getFeatureFlower().subscribe((flower) => {
            this.bestFlower = flower;
        });
    }

    getLatestBlogs() {
        this.blogService.randomLatestBlogData().subscribe((blog) => {
            this.latestBlogs = blog;
        });
    }
}
