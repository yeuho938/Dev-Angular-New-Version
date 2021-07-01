import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import notify from 'devextreme/ui/notify';

@Component({
    selector: 'app-login-register-form',
    templateUrl: './login-register-form.component.html',
    styleUrls: ['./login-register-form.component.scss']
})
export class LoginRegisterFormComponent implements OnInit {

    loading = false;
    formLoginData: any = {};
    formSignUpData: any = {};
    rightPanelActive: boolean;

    constructor(private router: Router) {
    }

    async onLogin(e) {
        e.preventDefault();
        const {email, password} = this.formLoginData;
        this.loading = true;
        if (email === 'yeuho@gmail.com' && password === '123') {
            this.router.navigate(['/client/homepage']);
            this.loading = false;
        } else {
            notify('Invalid Email or Password!');
            this.loading = false;
        }
    }

    async onSignUp(e) {
        const {name, username, email, password} = this.formSignUpData;
        this.loading = true;
    }

    ngOnInit() {
    }

    onToggleForm(value: boolean) {
        this.rightPanelActive = value;
    }
}
