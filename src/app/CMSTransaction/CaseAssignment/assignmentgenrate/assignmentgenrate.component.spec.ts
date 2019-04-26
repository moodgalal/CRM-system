import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentgenrateComponent } from './assignmentgenrate.component';

describe('AssignmentgenrateComponent', () => {
  let component: AssignmentgenrateComponent;
  let fixture: ComponentFixture<AssignmentgenrateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentgenrateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentgenrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
