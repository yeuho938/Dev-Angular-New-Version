import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {DxiValidationRuleModule} from 'devextreme-angular/ui/nested';

@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.scss']
})
export class CreateAccountFormComponent {
  loading = false;
  formData: any = {};

  constructor( private router: Router) { }

  async onSubmit(e) {
    e.preventDefault();
    const { email, password } = this.formData;
    this.loading = true;
    this.loading = false;

  }
}
