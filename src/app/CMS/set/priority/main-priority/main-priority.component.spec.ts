import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPriorityComponent } from './main-priority.component';

describe('MainPriorityComponent', () => {
  let component: MainPriorityComponent;
  let fixture: ComponentFixture<MainPriorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPriorityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
