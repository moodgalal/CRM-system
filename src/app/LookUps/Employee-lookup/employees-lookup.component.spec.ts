import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLookupComponent } from './employees-lookup.component';

describe('EmployeeLookupComponent', () => {
  let component: EmployeeLookupComponent;
  let fixture: ComponentFixture<EmployeeLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
