import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

    isDropZoneActive = false;
    imageSource = 'https://i.pinimg.com/originals/e7/a5/21/e7a521f8cbaf2b270cfbab798837e192.jpg';
    textVisible = true;
    progressVisible = false;
    progressValue = 0;

    constructor() {
        this.onDropZoneEnter = this.onDropZoneEnter.bind(this);
        this.onDropZoneLeave = this.onDropZoneLeave.bind(this);
        this.onUploaded = this.onUploaded.bind(this);
        this.onProgress = this.onProgress.bind(this);
        this.onUploadStarted = this.onUploadStarted.bind(this);
    }

    onDropZoneEnter(e) {
        if (e.dropZoneElement.id === 'dropzone-external') {
            this.isDropZoneActive = true;
        }
    }

    onDropZoneLeave(e) {
        if (e.dropZoneElement.id === 'dropzone-external') {
            this.isDropZoneActive = false;
        }
    }

    onUploaded(e) {
        const file = e.file;
        const fileReader = new FileReader();
        fileReader.onload = () => {
            this.isDropZoneActive = false;
            this.imageSource = fileReader.result as string;
        };
        fileReader.readAsDataURL(file);
        this.textVisible = false;
        this.progressVisible = false;
        this.progressValue = 0;
    }

    onProgress(e) {
        this.progressValue = e.bytesLoaded / e.bytesTotal * 100;
    }

    onUploadStarted() {
        this.imageSource = '';
        this.progressVisible = true;
    }

    ngOnInit(): void {
    }

}
