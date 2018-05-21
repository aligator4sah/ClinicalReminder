import { Component, OnInit } from '@angular/core';
import {ReminderService} from '../service/reminder.service';

@Component({
  selector: 'app-reminder-list',
  templateUrl: './reminder-list.component.html',
  styleUrls: ['./reminder-list.component.css']
})
export class ReminderListComponent implements OnInit {

  notes;
  needPost: boolean = false;

  constructor(
    private remindService: ReminderService
  ) { }

  ngOnInit() {
    this.notes = this.remindService.getReminderNotes();
  }

  postNew() {
    this.needPost = true;
  }

}
