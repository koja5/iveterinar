import { Component, OnInit } from '@angular/core';
import { ShowUsersService } from '../../../../service/show-users/show-users.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  private usersData: any;

  constructor(private service: ShowUsersService) { }

  ngOnInit() {
    this.service.getUsers().subscribe(
      data => {
        this.usersData = data;
      });
  }

  activateUser(id: number) {
    console.log(id);
    this.service.activeUser(id).subscribe(
      data => {
        this.service.getUsers().subscribe(
          data1 => {
            this.usersData = data1;
          });
      },
      err => console.log(err),
      () => console.log('Completed!'));
  }

  deactivateUser(id: number) {
    console.log(id);
    this.service.deactiveUser(id).subscribe(
      data => {
        this.service.getUsers().subscribe(
          data1 => {
            this.usersData = data1;
          });
      },
      err => console.log(err),
      () => console.log('Completed!'));
  }

}
