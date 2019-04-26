import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashreminderComponent } from './dashreminder.component';

describe('DashreminderComponent', () => {
  let component: DashreminderComponent;
  let fixture: ComponentFixture<DashreminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashreminderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashreminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
