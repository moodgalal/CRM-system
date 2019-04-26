import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCustomerRefranceComponent } from './update-customer-refrance.component';

describe('UpdateCustomerRefranceComponent', () => {
  let component: UpdateCustomerRefranceComponent;
  let fixture: ComponentFixture<UpdateCustomerRefranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCustomerRefranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCustomerRefranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
