import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule, routingComponents } from './component/app-routing/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'angular2-modal';

// service
import { AppService } from './app.service';
import { GetdataService } from './service/get-data/getdata.service';
import { LoginService } from './service/login/login.service';
import { CookieService } from 'ng2-cookies';
import { HomeService } from './service/home/home.service';
import { DashboardService } from './service/dashboard/dashboard.service';
import { SignupService } from './service/signup/signup.service';
import { ShowUsersService } from './service/show-users/show-users.service';
import { MailService } from './service/mail/mail.service';

// guard
import { LoggedGuard } from './service/login-guard/loggedGuard';
import { LoginGuard } from './service/login-guard/loginGuard';
import { DashboardGuard } from './service/login-guard/dashboardGuard';

// component
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { GetdataComponent } from './component/getdata/getdata.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CalendarComponent } from './component/dashboard/user/calendar/calendar.component';
import { HomeDashboardComponent } from './component/dashboard/user/home-dashboard/home-dashboard.component';
import { CardsComponent } from './component/dashboard/user/cards/cards.component';
import { SignupComponent } from './component/signup/signup.component';
import { AdminComponent } from './component/dashboard/admin/admin.component';
import { ShowUsersComponent } from './component/dashboard/admin/show-users/show-users.component';

// kendo module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { UserComponent } from './component/dashboard/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    routingComponents,
    GetdataComponent,
    DashboardComponent,
    CalendarComponent,
    HomeDashboardComponent,
    CardsComponent,
    SignupComponent,
    AdminComponent,
    ShowUsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    GridModule
  ],
  providers: [
    AppService,
    GetdataService,
    LoginService,
    CookieService,
    HomeService,
    DashboardService,
    SignupService,
    ShowUsersService,
    LoggedGuard,
    DashboardGuard,
    LoginGuard,
    MailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
