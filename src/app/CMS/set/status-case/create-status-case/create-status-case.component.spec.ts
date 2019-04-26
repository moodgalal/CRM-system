import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStatusCaseComponent } from './create-status-case.component';

describe('CreateStatusCaseComponent', () => {
  let component: CreateStatusCaseComponent;
  let fixture: ComponentFixture<CreateStatusCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStatusCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStatusCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
