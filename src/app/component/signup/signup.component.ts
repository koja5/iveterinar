import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../service/signup/signup.service';
import { MailService } from '../../service/mail/mail.service';
import { Router } from '@angular/router';

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

  constructor(private service: SignupService, private mailService: MailService, private router: Router) { }

  ngOnInit() {
  }

  signUp(form) {
    this.service.signUp(this.data, (val) => {
      this.mailService.sendMail(this.data, function () {
        console.log('Mail uspesno poslat');
      });
      console.log(val);
      console.log(this.data);
      form.reset();
    });
  }

  login() {
    this.router.navigate(['login']);
  }
}
