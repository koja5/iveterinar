import { Component, OnInit } from '@angular/core';
import { ShowUsersService } from '../../../../service/show-users/show-users.service';
import { process, State, CompositeFilterDescriptor, filterBy, GroupDescriptor } from '@progress/kendo-data-query';
import { GridComponent, GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  private usersData: any;
  public currentLoadedData: any;
  public distinctCategories: any[];
  public filter: CompositeFilterDescriptor;
  public groups: GroupDescriptor[] = [];
  public state: State = {
    skip: 0,
    take: 5,
};

  constructor(private service: ShowUsersService) { }

  ngOnInit() {
    this.service.getUsers().subscribe(
      data => {
        this.currentLoadedData = data;
        this.usersData = process(this.currentLoadedData, {group: this.groups});
        this.usersData.total = 10;
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

  public filterChange(filter: CompositeFilterDescriptor): void {
    this.filter = filter;
    const resultSort = filterBy(this.currentLoadedData, filter);
    this.usersData = process(resultSort, {group: this.groups});
    this.usersData.total = 10;
    console.log(this.usersData);
  }
}
