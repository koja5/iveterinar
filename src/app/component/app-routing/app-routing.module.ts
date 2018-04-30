import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppRoutingRoutingModule } from './app-routing-routing.module';

import { AppComponent } from '../../app.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { GetdataComponent } from '../getdata/getdata.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CalendarComponent } from '../dashboard/user/calendar/calendar.component';
import { HomeDashboardComponent } from '../dashboard/user/home-dashboard/home-dashboard.component';
import { CardsComponent } from '../dashboard/user/cards/cards.component';
import { SignupComponent } from '../signup/signup.component';
import { AdminComponent} from '../dashboard/admin/admin.component';
import { ShowUsersComponent } from '../dashboard/admin/show-users/show-users.component';
import { UserComponent } from '../dashboard/user/user.component';
// guard
import { LoginGuard } from '../../service/login-guard/loginGuard';
import { LoggedGuard } from '../../service/login-guard/loggedGuard';
import { DashboardGuard } from '../../service/login-guard/dashboardGuard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent
  },
  { path: 'login', component: LoginComponent, canActivate: [LoggedGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [LoggedGuard] },
  { path: 'posts', component: GetdataComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [LoginGuard, DashboardGuard],
    children: [
      { path: 'userHome', component: UserComponent, outlet: 'dash',
        children: [
          { path: 'home', component: HomeDashboardComponent, outlet: 'home' },
          { path: 'cards', component: CardsComponent, outlet: 'home'},
          { path: 'calendar', component: CalendarComponent, outlet: 'home' }
      ]},
      { path: 'admin', component: AdminComponent, outlet: 'dash',
        children: [
          { path: 'show', component: ShowUsersComponent, outlet: 'admin' }
        ], canActivate: [LoginGuard, DashboardGuard]
      },
      { path: 'show', component: ShowUsersComponent, outlet: 'admin' }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [AppComponent, HomeComponent, LoginComponent];
