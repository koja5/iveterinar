import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../service/signup/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private data = {
    'email': '',
    'username': '',
    'password': '',
    'confirmPassword': ''
  };

  constructor(private servie: SignupService) { }

  ngOnInit() {
  }

  signUp(form) {
    this.servie.signUp(this.data, (val) => {
      console.log(val);
      console.log(this.data);
      form.reset();
    });
  }
}
