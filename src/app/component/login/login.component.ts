import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../service/login/login.service';
import { CookieService } from 'ng2-cookies';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',
    '../../../assets/login/css/util.css',
    '../../../assets/login/css/main.css'
  ]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private service: LoginService, private cookie: CookieService) { }

  ngOnInit() {
  }

  // tslint:disable-next-line:member-ordering
  public data = {
    'username': '',
    'password': ''
  };

  formSubmit1() {
    if (this.data.username === 'admin' && this.data.password === 'admin') {
      console.log('Hello admin!');
      this.router.navigate([`../dashboard`], { relativeTo: this.route });
    } else {
    }
  }

  formSubmit() {
    const thisObject = this;
    console.log('login usao sam');
    this.service.login(this.data, (isLogin, notActive, user) => {
      console.log('login' + notActive);
      if (isLogin && !notActive) {
        console.log('usao samm!');
        console.log(user);
        this.cookie.set('user', user);
        if (user === '1') {
          thisObject.router.navigate(['admin']);
        } else {
          thisObject.router.navigate(['dashboard']);
        }
      } else if (notActive) {
        console.log('Pogresan password!');
      }
    });
  }

}
