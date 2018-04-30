import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../service/dashboard/dashboard.service';
import { CookieService } from 'ng2-cookies';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private menuData: any;

  constructor(private service: DashboardService, private router: Router, private cookie: CookieService) { }

  ngOnInit() {
    this.service.getAdminMenu().subscribe(
      data => {
        this.menuData = data['menu'];
      }
    );
  }

  Logout() {
    this.router.navigate(['home']);
    this.cookie.deleteAll();
    console.log(this.cookie.get('user'));
  }

}
