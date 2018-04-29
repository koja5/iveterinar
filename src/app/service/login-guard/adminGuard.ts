import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { CookieService } from 'ng2-cookies';

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private _router: Router, private http: Http, private cookie: CookieService) { }

    /* Kada se bude menjao loginGuard, cookie.check('üser') proverava samo da li postoji,
    a cookie.get('user') da koji je tip usera. Ukoliko ne postoji cookie.get('user') vraca prazan string*/

    canActivate() {
        if (this.cookie.check('user') && this.cookie.get('user') === '1') {
            return true;
        } else {
            this._router.navigate(['user-main']);
            // ako je obican korisnik

            return false;
        }


    }

}
