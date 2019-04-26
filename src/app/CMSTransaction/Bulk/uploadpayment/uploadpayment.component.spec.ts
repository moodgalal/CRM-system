import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadpaymentComponent } from './uploadpayment.component';

describe('UploadpaymentComponent', () => {
  let component: UploadpaymentComponent;
  let fixture: ComponentFixture<UploadpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
