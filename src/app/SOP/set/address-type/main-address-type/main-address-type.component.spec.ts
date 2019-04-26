import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAddressTypeComponent } from './main-address-type.component';

describe('MainAddressTypeComponent', () => {
  let component: MainAddressTypeComponent;
  let fixture: ComponentFixture<MainAddressTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAddressTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAddressTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
