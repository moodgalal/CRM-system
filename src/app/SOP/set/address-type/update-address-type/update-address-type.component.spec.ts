import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAddressTypeComponent } from './update-address-type.component';

describe('UpdateAddressTypeComponent', () => {
  let component: UpdateAddressTypeComponent;
  let fixture: ComponentFixture<UpdateAddressTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAddressTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAddressTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
