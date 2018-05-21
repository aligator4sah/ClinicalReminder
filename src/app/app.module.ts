import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReminderPostComponent } from './reminder-post/reminder-post.component';
import { ReminderListComponent } from './reminder-list/reminder-list.component';
import { ReminderHistoryComponent } from './reminder-history/reminder-history.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClarityModule} from '@clr/angular';
import {AppRoutingModule} from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import {ReminderService} from './service/reminder.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DatePipe} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReminderPostComponent,
    ReminderListComponent,
    ReminderHistoryComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    ReminderService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
