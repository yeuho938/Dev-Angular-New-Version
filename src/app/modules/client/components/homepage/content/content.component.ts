import {Component, OnInit} from '@angular/core';
import {IMAGE_SLIDER} from '../../../shared/image-slider';
import {GALLERY_IMAGE} from '../../../shared/gallery-image';
@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
    imageSlider = IMAGE_SLIDER;
    imageGallery = GALLERY_IMAGE;
    constructor() {
    }

    ngOnInit(): void {
    }
}
