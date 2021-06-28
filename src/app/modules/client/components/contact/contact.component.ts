import { Component, OnInit } from '@angular/core';
import notify from "devextreme/ui/notify";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    titleBreadcrumb = 'Contact Us';
    breadcrumbItem = 'Contact';
  constructor() { }

  ngOnInit() {
  }
    click(massage: string) {
        notify(massage + 'successfully');
    }
}
