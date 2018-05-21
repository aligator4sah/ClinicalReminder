import { Injectable } from '@angular/core';

@Injectable()
export class ReminderService {

  constructor() { }

  getReminderNotes() {
    //TODO: change to http GET method
    const notes = [
      {
        id: 1,
        patient: 'John Smith',
        high: 23,
        middle: 10,
        low: 14
      },
      {
        id: 2,
        patient: 'Henry Hunter',
        high: 12,
        middle: 20,
        low: 2,
      },
      {
        id: 3,
        patient: 'Daisy Own',
        high: 10,
        middle: 0,
        low: 13,
      },
      {
        id: 4,
        patient: 'Ever Zhang',
        high: 19,
        middle: 12,
        low: 23
      },
      {
        id: 5,
        patient: 'Emma Sam',
        high: 23,
        middle: 9,
        low: 2,
      }
    ];

    return notes;
  }
}
