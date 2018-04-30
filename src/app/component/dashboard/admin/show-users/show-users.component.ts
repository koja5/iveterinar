import { Component, OnInit } from '@angular/core';
import { ShowUsersService } from '../../../../service/show-users/show-users.service';
import { process, State } from '@progress/kendo-data-query';
import { GridComponent, GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';

const distinct = data => data
  .map(x => x.Category)
  .filter((x, idx, xs) => xs.findIndex(y => y.CategoryName === x.CategoryName) === idx);

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  private usersData: any[];

  public distinctCategories: any[];

  public state: State = {
    skip: 0,
    take: 5,

    // Initial filter descriptor
    filter: {
      logic: 'and',
      filters: [{ field: 'ProductName', operator: 'contains', value: 'Chef' }]
    }
};

  constructor(private service: ShowUsersService) { }

  ngOnInit() {
    this.service.getUsers().subscribe(
      data => {
        this.distinctCategories = distinct(data);
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
