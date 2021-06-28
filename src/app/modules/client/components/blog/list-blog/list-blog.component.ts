import {Component, OnInit} from '@angular/core';
import {BlogService} from '@app/modules/client/services/blog.service';
import {Blog} from '@app/modules/client/models/blog.class';

@Component({
    selector: 'app-list-blog',
    templateUrl: './list-blog.component.html',
    styleUrls: ['./list-blog.component.scss']
})
export class ListBlogComponent implements OnInit {
    blogData: Blog[];

    constructor(public blogService: BlogService) {
    }

    ngOnInit() {
        this.getBlogData();
    }

    getBlogData() {
        this.blogService.getBlogData().subscribe((item) => {
            this.blogData = item;
        });
    }
}
