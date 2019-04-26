import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentapproveComponent } from './paymentapprove.component';

describe('PaymentapproveComponent', () => {
  let component: PaymentapproveComponent;
  let fixture: ComponentFixture<PaymentapproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentapproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentapproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
