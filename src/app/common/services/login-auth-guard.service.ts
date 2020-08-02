import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

/**
 * Login Auth Guard Service
 */

@Injectable({
    providedIn: 'root'
})

export class LoginAuthGuardService {
    constructor(
        private router: Router
    ) {
    }

    /**
     * @name canActivate
     * @desc create for restrict routes according to user.
     * @param route
     * @param state
     * @return true/false
     */

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        if (localStorage.hasOwnProperty('token')) {
            console.log("Will redirect to dashboard")
            return false;
        } else {
            return true;
        }
    }
}
