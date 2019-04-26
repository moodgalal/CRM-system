import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatworkQueueComponent } from './creatwork-queue.component';

describe('CreatworkQueueComponent', () => {
  let component: CreatworkQueueComponent;
  let fixture: ComponentFixture<CreatworkQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatworkQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatworkQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
