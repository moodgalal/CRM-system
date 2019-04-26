import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { COWorkQueueComponent } from './co-work-queue.component';

describe('COWorkQueueComponent', () => {
  let component: COWorkQueueComponent;
  let fixture: ComponentFixture<COWorkQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ COWorkQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(COWorkQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
