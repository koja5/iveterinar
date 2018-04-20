import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { CookieService } from 'ng2-cookies';

@Injectable()
export class LoginService {

  private logged: boolean;
  constructor(private http: Http, private cookie: CookieService) { }

  login(data, callback) {
    console.log('pozvao sam service!');
    this.http.post('/api/login', data)
      .map(res => res.json())
      .subscribe(val => {
        this.logged = val.login;
        callback(val.login, val.notVerified, val.user);
      });
  }

}
