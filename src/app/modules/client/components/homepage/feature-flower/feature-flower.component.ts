import { Component, OnInit } from '@angular/core';
import {FlowerService} from '@app/modules/shared/services';
import {Flower} from '@app/modules/shared/models';

@Component({
  selector: 'app-feature-flower',
  templateUrl: './feature-flower.component.html',
  styleUrls: ['./feature-flower.component.scss']
})
export class FeatureFlowerComponent implements OnInit {
    featureFlowers: Flower[];
  constructor(public flowerService: FlowerService) { }

  ngOnInit() {
      this.getAllFlowers();
  }

    getAllFlowers() {
        this.flowerService.getFeatureFlower().subscribe((flower) => {
            this.featureFlowers = flower;
        });
    }
}
