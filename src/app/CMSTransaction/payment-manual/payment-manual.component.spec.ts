import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentManualComponent } from './payment-manual.component';

describe('PaymentManualComponent', () => {
  let component: PaymentManualComponent;
  let fixture: ComponentFixture<PaymentManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
