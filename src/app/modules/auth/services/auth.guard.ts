import {Injectable} from '@angular/core';
import { Router} from '@angular/router';

const defaultPath = '/';
const defaultUser = {
    email: 'sandra@example.com',
    avatarUrl: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png'
};

@Injectable()
export class AuthGuard {
    private _user = defaultUser;

    get loggedIn(): boolean {
        return !!this._user;
    }

    private _lastAuthenticatedPath: string = defaultPath;
    set lastAuthenticatedPath(value: string) {
        this._lastAuthenticatedPath = value;
    }

    constructor(private router: Router) {
    }

    async logIn(email: string, password: string) {

        try {
            // Send request
            console.log(email, password);
            this._user = {...defaultUser, email};
            this.router.navigate([this._lastAuthenticatedPath]);

            return {
                isOk: true,
                data: this._user
            };
        } catch {
            return {
                isOk: false,
                message: 'Authentication failed'
            };
        }
    }

    async getUser() {
        try {
            // Send request

            return {
                isOk: true,
                data: this._user
            };
        } catch {
            return {
                isOk: false
            };
        }
    }

    async createAccount(email, password) {
        try {
            // Send request
            console.log(email, password);

            this.router.navigate(['/create-account']);
            return {
                isOk: true
            };
        } catch {
            return {
                isOk: false,
                message: 'Failed to create account'
            };
        }
    }

    async changePassword(email: string, recoveryCode: string) {
        try {
            // Send request
            console.log(email, recoveryCode);

            return {
                isOk: true
            };
        } catch {
            return {
                isOk: false,
                message: 'Failed to change password'
            }
        }
        ;
    }

    async resetPassword(email: string) {
        try {
            // Send request
            console.log(email);

            return {
                isOk: true
            };
        } catch {
            return {
                isOk: false,
                message: 'Failed to reset password'
            };
        }
    }

    async logOut() {
        this._user = null;
        this.router.navigate(['/login-form']);
    }
}
