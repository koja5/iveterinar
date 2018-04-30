import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DashboardService {

  constructor(public http: Http) { }

  getMenu() {
    return this.http.get('../../../assets/configuration/menu.json')
      .map((res: Response) => res.json());
  }

  getAdminMenu() {
    return this.http.get('../../../assets/configuration/admin-menu.json')
    .map((res: Response) => res.json());
  }

}
