import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAddressTypeComponent } from './create-address-type.component';

describe('CreateAddressTypeComponent', () => {
  let component: CreateAddressTypeComponent;
  let fixture: ComponentFixture<CreateAddressTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAddressTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAddressTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
