import { Component } from '@angular/core';
import { Router } from '@angular/router';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  loading = false;
  formData: any = {};

  constructor( private router: Router) { }

  async onSubmit(e) {
    e.preventDefault();
    const { email, password } = this.formData;
    this.loading = true;
  }

  onCreateAccountClick = () => {
    this.router.navigate(['/create-account']);
  }
}

