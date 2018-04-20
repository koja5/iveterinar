import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SignupService {

  constructor(private http: Http) { }

  signUp(data, callback) {
    console.log('Pozivam funkciju signup!');
    this.http.post('/api/signUp', data)
      .map(res => res.json())
      .subscribe(val => callback(val));
  }
}
