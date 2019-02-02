import { UserApi } from 'src/fw/users/user-api';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class UserService implements UserApi {

    isAuthenticaded = false;

    constructor(private router: Router) {

    }

    singIn(username: string, password: string,
        rememberMe: boolean): Observable<any> {
        this.isAuthenticaded = true;
        return of({});
    }

    signout() {
        this.isAuthenticaded = false;
        this.router.navigate(["/sign-in"]);
        return of({});
    }

}