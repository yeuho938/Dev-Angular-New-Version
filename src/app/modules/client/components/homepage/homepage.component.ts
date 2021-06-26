import {Component, OnInit} from '@angular/core';
import {IMAGE_SLIDER} from '@app/modules/client/shared/image-slider';
import {GALLERY_IMAGE} from '@app/modules/client/shared/gallery-image';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
    imageSlider = IMAGE_SLIDER;
    imageGallery = GALLERY_IMAGE;

    constructor() {
    }

    ngOnInit(): void {
    }

}
