import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Blog} from '@app/modules/client/models/blog.class';
import {randomBlogData, randomLatestBlogData} from '@app/data/client/blog.mock';

@Injectable({
    providedIn: 'root'
})
export class BlogService {

    constructor() {
    }

    getBlogData(): Observable<Blog[]> {
        return of(randomBlogData(6));
    }

    randomLatestBlogData(): Observable<Blog[]> {
        return of(randomLatestBlogData(3));
    }
}
