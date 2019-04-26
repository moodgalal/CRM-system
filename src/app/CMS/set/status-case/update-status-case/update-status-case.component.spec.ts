import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStatusCaseComponent } from './update-status-case.component';

describe('UpdateStatusCaseComponent', () => {
  let component: UpdateStatusCaseComponent;
  let fixture: ComponentFixture<UpdateStatusCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateStatusCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStatusCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
