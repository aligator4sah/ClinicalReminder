import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderPostComponent } from './reminder-post.component';

describe('ReminderPostComponent', () => {
  let component: ReminderPostComponent;
  let fixture: ComponentFixture<ReminderPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
