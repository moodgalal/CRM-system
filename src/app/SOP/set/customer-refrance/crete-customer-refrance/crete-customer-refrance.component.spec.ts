import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreteCustomerRefranceComponent } from './crete-customer-refrance.component';

describe('CreteCustomerRefranceComponent', () => {
  let component: CreteCustomerRefranceComponent;
  let fixture: ComponentFixture<CreteCustomerRefranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreteCustomerRefranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreteCustomerRefranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
