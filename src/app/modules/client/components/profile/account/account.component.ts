import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
    user: any = {
        UserName: 'yeuho',
        Email: 'yeuho@gmail.com',
        Name: 'Yeu',
        Phone: '023534657',
        BirthDate: new Date(2000, 2, 16),
    };
    galleryDataSource = [{
        imageAlt: "Maria",
        imageSrc: "https://js.devexpress.com/Content/images/doc/21_1/PhoneJS/person1.png"
    }, {
        imageAlt: "John",
        imageSrc: "https://js.devexpress.com/Content/images/doc/21_1/PhoneJS/person2.png"
    }, {
        imageAlt: "Xavier",
        imageSrc: "https://js.devexpress.com/Content/images/doc/21_1/PhoneJS/person3.png"
    }];
    selectedItem = this.galleryDataSource[1];
    genders: any = [
        'Male',
        'Female',
        'Other'
    ];
    constructor() {
    }

    ngOnInit() {
    }

}
