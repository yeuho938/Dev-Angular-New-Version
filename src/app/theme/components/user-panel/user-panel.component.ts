import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-user-panel',
    templateUrl: 'user-panel.component.html',
    styleUrls: ['./user-panel.component.scss']
})

export class UserPanelComponent implements OnInit, OnDestroy {
    menuItems = [
        {
            text: 'Profile',
            icon: 'user'
        },
        {
            text: 'Logout',
            icon: 'runner',
            // onClick: () => {
            //   this.authService.logout();
            // }
        }
    ];

    subscription: Subscription = new Subscription();

    constructor() {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
