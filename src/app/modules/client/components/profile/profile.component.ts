import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    titleBreadcrumb = 'Profile';
    breadcrumbItem = 'My profile';
    content = 'account';

    constructor() {
    }

    ngOnInit() {
    }

    onToggleContent(val: string) {
        this.content = val;
    }
}
