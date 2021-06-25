import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'list-flowers',
  templateUrl: './list-flowers.component.html',
  styleUrls: ['./list-flowers.component.scss']
})
export class ListFlowersComponent implements OnInit {
    colMd4 = 'col-md-4 col-sm-6';
    titleBreadcrumb = 'List Flowers in Shop';
    breadcrumbItem = 'Flowers';
  constructor() { }

  ngOnInit(): void {
  }
}
