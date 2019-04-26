import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincaseassignmentComponent } from './maincaseassignment.component';

describe('MaincaseassignmentComponent', () => {
  let component: MaincaseassignmentComponent;
  let fixture: ComponentFixture<MaincaseassignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaincaseassignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaincaseassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
