import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsClientAddressComponent } from './cms-client-address.component';

describe('CmsClientAddressComponent', () => {
  let component: CmsClientAddressComponent;
  let fixture: ComponentFixture<CmsClientAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmsClientAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsClientAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
