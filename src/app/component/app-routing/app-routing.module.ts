import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppRoutingRoutingModule } from './app-routing-routing.module';

import { AppComponent } from '../../app.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { GetdataComponent } from '../getdata/getdata.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CalendarComponent } from '../dashboard/calendar/calendar.component';
import { HomeDashboardComponent } from '../dashboard/home-dashboard/home-dashboard.component';
import { CardsComponent } from '../dashboard/cards/cards.component';
import { SignupComponent } from '../signup/signup.component';
import { AdminComponent} from '../dashboard/admin/admin.component';
import { ShowUsersComponent } from '../dashboard/admin/show-users/show-users.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'posts', component: GetdataComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'show', component: ShowUsersComponent },
  { path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'home', component: HomeDashboardComponent, outlet: 'dash' },
      { path: 'cards', component: CardsComponent, outlet: 'dash'},
      { path: 'calendar', component: CalendarComponent, outlet: 'dash' }

    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [AppComponent, HomeComponent, LoginComponent];
