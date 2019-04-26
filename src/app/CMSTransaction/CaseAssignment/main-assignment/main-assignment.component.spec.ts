import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAssignmentComponent } from './main-assignment.component';

describe('MainAssignmentComponent', () => {
  let component: MainAssignmentComponent;
  let fixture: ComponentFixture<MainAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
