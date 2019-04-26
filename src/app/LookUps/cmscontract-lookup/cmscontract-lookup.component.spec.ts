import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CMSContractLookupComponent } from './cmscontract-lookup.component';

describe('CMSContractLookupComponent', () => {
  let component: CMSContractLookupComponent;
  let fixture: ComponentFixture<CMSContractLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CMSContractLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CMSContractLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
