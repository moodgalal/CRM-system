import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkCaseassignmentComponent } from './bulk-caseassignment.component';

describe('BulkCaseassignmentComponent', () => {
  let component: BulkCaseassignmentComponent;
  let fixture: ComponentFixture<BulkCaseassignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkCaseassignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkCaseassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
