import { UserService } from './user.service';
import { Router, CanActivate, CanActivateChild } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root"
})
export class AuthGuard implements CanActivate, CanActivateChild{
    
    constructor(private userService: UserService, private router: Router){        
    }
    canActivate(): boolean{
        if(!this.userService.isAuthenticaded){
            this.router.navigate(["/sign-in"]);
        }
        return this.userService.isAuthenticaded;
    }

    canActivateChild(): boolean{
        return this.canActivate();
    }
}