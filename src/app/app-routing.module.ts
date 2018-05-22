import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login/login.component';
import {ReminderListComponent} from './reminder-list/reminder-list.component';
import {ReminderPostComponent} from './reminder-post/reminder-post.component';
import {ReminderHistoryComponent} from './reminder-history/reminder-history.component';
import {RouterModule} from '@angular/router';

export const appRoutes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'reminder-list',
    component: ReminderListComponent
  },
  {
    path: 'reminder-post',
    component: ReminderPostComponent,
  },
  {
    path: 'reminder-history/:id',
    component: ReminderHistoryComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
