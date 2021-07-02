import { Component, OnInit } from '@angular/core';
import {NAVIGATION_PROFILE} from '@app/modules/client/shared/navigationProfile';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

    profileMenu = NAVIGATION_PROFILE;
    constructor() {
    }

    ngOnInit() {
    }
    onSubmenuShowing(e) {
        if (e) {
            const menuPopup = e.submenu.$contentDelimiter[0].parentNode;
            if (menuPopup) {
                menuPopup.classList.add('header-submenu');
            }
        }
    }

}
