import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../service/dashboard/dashboard.service';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent implements OnInit {

  constructor(public service: DashboardService) { }

  ngOnInit() {
    this.service.getMenu().subscribe(
      data => {
        console.log(data);
        console.log('usao sam opet!');
      }
    );
  }
}
