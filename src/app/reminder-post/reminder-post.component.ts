import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ClrWizard} from '@clr/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-reminder-post',
  templateUrl: './reminder-post.component.html',
  styleUrls: ['./reminder-post.component.css']
})
export class ReminderPostComponent implements OnInit {
  // TODO: change open attribute to global observale so that component could communicate

  @Input() open: boolean;
  @ViewChild("wizardlg") wizardLarge: ClrWizard;

  reminderForm: FormGroup;
  remindNote = new Reminder();
  today = Date.now();

  constructor(
    private fb: FormBuilder,
    private date: DatePipe
  ) { }

  ngOnInit() {
    this.reminderForm = this.fb.group({
      pname: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      duration: ['', Validators.required],
      priority: ['', Validators.required]
    });
    this.reminderForm.controls['pname'].valueChanges.subscribe(value =>
      this.remindNote.patient = value
    );
    this.reminderForm.controls['title'].valueChanges.subscribe(value =>
      this.remindNote.title = value
    );
    this.reminderForm.controls['description'].valueChanges.subscribe(value =>
      this.remindNote.description =value
    );
    this.reminderForm.controls['duration'].valueChanges.subscribe(value =>
      this.remindNote.duration = value
    );
    this.reminderForm.controls['priority'].valueChanges.subscribe(value =>
      this.remindNote.priority = value
    );

  }

  submit() {
    this.remindNote.startTime = this.date.transform(this.today,  "yyyy-MM-dd HH:mm a z':'+0900");
    console.log(this.remindNote);
  }

}

export class Reminder {
  id: number;
  patient: string;
  doctor: string;
  title: string;
  description: string;
  duration: number;
  startTime: string;
  priority: string;

  constructor(options: {
    id?: number,
    patient?: string,
    doctor?: string,
    title?: string,
    description?: string,
    duration?: number,
    startTime?: string,
    priority?: string
  } = {}) {
    this.id = options.id || 0;
    this.patient = options.patient;
    this.doctor = options.doctor || '';
    this.title = options.title || '';
    this.description = options.description || '';
    this.duration = options.duration || 0;
    this.startTime = options.startTime || '';
    this.priority = options.priority || '';
  }
}
