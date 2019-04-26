import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasePaymentComponent } from './case-payment.component';

describe('CasePaymentComponent', () => {
  let component: CasePaymentComponent;
  let fixture: ComponentFixture<CasePaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasePaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
