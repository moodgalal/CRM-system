import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatPriorityComponent } from './creat-priority.component';

describe('CreatPriorityComponent', () => {
  let component: CreatPriorityComponent;
  let fixture: ComponentFixture<CreatPriorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatPriorityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
