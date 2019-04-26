import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCompanyAddressComponent } from './update-company-address.component';

describe('UpdateCompanyAddressComponent', () => {
  let component: UpdateCompanyAddressComponent;
  let fixture: ComponentFixture<UpdateCompanyAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCompanyAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCompanyAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
