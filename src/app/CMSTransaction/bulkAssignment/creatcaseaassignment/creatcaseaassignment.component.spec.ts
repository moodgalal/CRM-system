import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatcaseaassignmentComponent } from './creatcaseaassignment.component';

describe('CreatcaseaassignmentComponent', () => {
  let component: CreatcaseaassignmentComponent;
  let fixture: ComponentFixture<CreatcaseaassignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatcaseaassignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatcaseaassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
