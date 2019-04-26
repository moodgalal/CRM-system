import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStatusCaseComponent } from './main-status-case.component';

describe('MainStatusCaseComponent', () => {
  let component: MainStatusCaseComponent;
  let fixture: ComponentFixture<MainStatusCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainStatusCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainStatusCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
