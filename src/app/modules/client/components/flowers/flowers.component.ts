import {Component, Input, OnInit,} from '@angular/core';
import {FlowerService} from '@app/modules/shared/services';
import {Flower} from '@app/modules/shared/models';

@Component({
    selector: 'app-user-flowers',
    templateUrl: './flowers.component.html',
    styleUrls: ['./flowers.component.scss']
})
export class FlowersComponent implements OnInit {
    allFlowers: Flower[];
    @Input() colMd3 = 'col-md-3 col-sm-6';

    constructor(public flowerService: FlowerService) {
    }

    ngOnInit(): void {
        this.getAllFlowers();
    }

    getAllFlowers() {
        this.flowerService.getAllFlower().subscribe((flower) => {
            this.allFlowers = flower;
        });
    }
}
