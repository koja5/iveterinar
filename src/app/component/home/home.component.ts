import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'app';
  private data: any;
  private menuData: any;
  constructor (private service: HomeService) {}

  ngOnInit() {
    this.service.getDataAboutMe().subscribe(
      data => {
        console.log(data);
        this.data = data;
      }
    );

    this.service.getMenuJson().subscribe(
      data => {
        this.menuData = data['menu'].reverse();
        console.log(this.menuData);
      }
    );

  }
}
