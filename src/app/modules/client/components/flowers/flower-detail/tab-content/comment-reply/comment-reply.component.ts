import {Component, OnInit} from '@angular/core';
import notify from 'devextreme/ui/notify';

@Component({
    selector: 'app-comment-reply',
    templateUrl: './comment-reply.component.html',
    styleUrls: ['./comment-reply.component.scss']
})
export class CommentReplyComponent implements OnInit {

    constructor() {
    }

    click = e => {
        const buttonText = e.component.option('text');
        notify('Your review has been submitted');
    }

    ngOnInit() {
    }

}
