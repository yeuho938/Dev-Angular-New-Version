import {Component} from '@angular/core';
import {Router} from '@angular/router';
import notify from 'devextreme/ui/notify';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
    loading = false;
    formData: any = {};

    constructor(private router: Router) {
    }

    async onSubmit(e) {
        e.preventDefault();
        const {email, password} = this.formData;
        this.loading = true;
        if (email === 'yeuho@gmail.com' && password === '123') {
            this.router.navigate(['/client/homepage']);
            this.loading = false;
        } else {
            notify('Invalid Email or Password!');
            this.loading = false;
        }
    }
}

