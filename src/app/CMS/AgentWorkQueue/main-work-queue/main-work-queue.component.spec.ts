import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWorkQueueComponent } from './main-work-queue.component';

describe('MainWorkQueueComponent', () => {
  let component: MainWorkQueueComponent;
  let fixture: ComponentFixture<MainWorkQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainWorkQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWorkQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
