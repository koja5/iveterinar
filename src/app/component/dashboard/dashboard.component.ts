import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../service/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public menuData: any;

  constructor(public service: DashboardService) { }

  ngOnInit() {
    this.service.getMenu().subscribe(
      data => {
        console.log(data);
        this.menuData = data['menu'];
      });
  }
}
