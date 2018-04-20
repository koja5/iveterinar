import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ShowUsersService {

  constructor(private http: Http) { }

  getUsers() {
    return this.http.get('/api/getUsers')
      .map(res => res.json());
  }

  activeUser(id: number) {
    return this.http.get('/api/activeUser/' + id)
      .map(res => res.json());
  }

  deactiveUser(id: number) {
    return this.http.get('/api/deactiveUser/' + id)
      .map(res => res.json());
  }

}
