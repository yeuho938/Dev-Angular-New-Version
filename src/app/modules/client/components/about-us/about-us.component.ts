import { Component, OnInit } from '@angular/core';
import {PROJECT_COUNTER, TEAM_ADMIN} from '@app/modules/client/shared/data-about-us';
import {SOCIAL_ICON} from '@app/modules/client/shared/social-icon';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
    titleBreadcrumb = 'About Us';
    breadcrumbItem = 'About us';
    projectCounter = PROJECT_COUNTER;
    teamAdmins = TEAM_ADMIN;
    socialIcons = SOCIAL_ICON;
  constructor() { }

  ngOnInit() {
  }

}
