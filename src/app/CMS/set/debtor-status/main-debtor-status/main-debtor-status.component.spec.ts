import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDebtorStatusComponent } from './main-debtor-status.component';

describe('MainDebtorStatusComponent', () => {
  let component: MainDebtorStatusComponent;
  let fixture: ComponentFixture<MainDebtorStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDebtorStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDebtorStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
