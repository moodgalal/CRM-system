import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCustomerRefranceComponent } from './main-customer-refrance.component';

describe('MainCustomerRefranceComponent', () => {
  let component: MainCustomerRefranceComponent;
  let fixture: ComponentFixture<MainCustomerRefranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCustomerRefranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCustomerRefranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
