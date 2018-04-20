import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {

  constructor(private http: Http) { }

  getDataAboutMe() {
    return this.http.get('../assets/configuration/aboutme.json')
      .map((res: Response) => res.json() );
  }

  getMenuJson() {
    return this.http.get('../../assets/configuration/menu.json')
      .map((res: Response) => res.json());
  }

}
