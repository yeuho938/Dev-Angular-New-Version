import {Component, Input, Output, EventEmitter} from '@angular/core';

import {USER_MENU} from '@app/modules/client/shared/user_menu';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
    @Input() menuToggleEnabled: boolean = false;
    @Input() showHeaderMenu: boolean = false;

    @Output() menuToggle = new EventEmitter<boolean>();
    isOpenCartBox = false;
    isOpenInfoUser = false;
    menuItems = USER_MENU;

    constructor() {
    }

    onHoverIconCart() {
        this.isOpenCartBox = !this.isOpenCartBox;
    }

    onHoverIconUser() {
        this.isOpenInfoUser = !this.isOpenInfoUser;
    }

    onSubmenuShowing(e) {
        if (e) {
            const menuPopup = e.submenu.$contentDelimiter[0].parentNode;
            if (menuPopup) {
                menuPopup.classList.add('header-submenu');
            }
        }
    }

    toggleMenu = () => {
        this.menuToggle.emit();
    }
}
