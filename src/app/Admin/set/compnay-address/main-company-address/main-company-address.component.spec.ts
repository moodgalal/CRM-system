import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCompanyAddressComponent } from './main-company-address.component';

describe('MainCompanyAddressComponent', () => {
  let component: MainCompanyAddressComponent;
  let fixture: ComponentFixture<MainCompanyAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCompanyAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCompanyAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
