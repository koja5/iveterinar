import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../../service/get-data/getdata.service';

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.css']
})
export class GetdataComponent implements OnInit {

  private data1: any;
  private userData: any;

  private data = {
    'username': '',
    'password': ''
  };

  constructor(private service: GetdataService) { }

  ngOnInit() {
    this.service.getAllPosts().subscribe(
      data => {
        console.log('test');
        this.data1 = data;
      }
    );


    this.service.getuser().subscribe(
      data => {
        this.userData = data;
                console.log(data);
      }
    );
  }

  dodajKorisnika(form) {
    console.log('pozvao samm dodajkor!');
    this.service.insertNewUser(this.data, (val) => {
      console.log(val);
      this.userData.push(this.data);
      this.service.getuser().subscribe(
        data => {
          this.userData = data;
          console.log(data);
        }
      );
      form.reset();
    });
  }

}
