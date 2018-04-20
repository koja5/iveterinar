import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetdataService {

  constructor(private http: Http) { }

  private data = {};
  insertNewUser(data, callback) {
      console.log('Pozivam funkciju insert!');
      console.log(data);
      this.http.post('/api/addUser', data)
          .map(res => res.json())
          .subscribe(val => callback(val));
  }

  getAllPosts() {
    return this.http.get('/api/posts')
      .map(res => res.json());
  }

  getuser() {
    return this.http.get('/api/user')
      .map(res => res.json());
  }



}
