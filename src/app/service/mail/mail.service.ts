import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class MailService {

    constructor(private http: Http) { }

    sendMail(data, callback) {
        const headers = new Headers();
        console.log('service mail servicee');
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/send', JSON.stringify(data), { headers: headers })
            .map(res => res)
            .subscribe(val => {
                callback();
            });
    }
    sendForgetMail(data, callback) {
      const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/forgotmail', JSON.stringify(data), { headers: headers })
            .map(res => res)
            .subscribe(val => {
                callback();
            });
    }

    posaljiMiPoruku(data, callback) {
        this.http.post('/api/askQuestion', data)
            .map(res => res.json())
            .subscribe(val => {
                callback(val);
            });

    }


}
