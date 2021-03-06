import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Flower} from '@app/modules/shared/models';
import {FlowerService} from '@app/modules/shared/services';
import {AppNotify} from '@app/utilities';


@Component({
  selector: 'app-edit-flowers',
  templateUrl: './edit-flowers.component.html',
  styleUrls: ['./edit-flowers.component.scss']
})
export class EditFlowersComponent implements OnInit {

  private _visible: boolean = false;
  editFlower: Flower = new Flower();
  @Output() onSuccess = new EventEmitter<Flower>();
  @Input() selectedFlower: Flower = new Flower();
  //
  @Input()
  get visible(): boolean {
    return this._visible;
  }

  set visible(value: boolean) {
    this._visible = value;
    this.visibleChange.emit(value);
  }

  @Output() visibleChange = new EventEmitter();

  constructor(public flowerService: FlowerService) {
  }

  ngOnInit(): void {
    if (this.selectedFlower.id) {
      this.flowerService.getFlowerById(this.selectedFlower.id).subscribe((result) => {
        this.editFlower = result;
      });
    }
  }
  submitForm(param: any) {
    if (!param.validationGroup.validate().isValid) {
      return false;
    } else {
      this.flowerService.saveFlower(this.editFlower).subscribe((flower) => {
        let message = 'Created success';
        if (this.editFlower.id) {
          message = 'Updated success';
        }
        AppNotify.success(message);
        this.onSuccess.emit(this.editFlower);
      }, (error) => {
      });
      this._visible = false;
    }
  }
}
