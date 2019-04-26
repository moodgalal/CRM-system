import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkCaseModifyComponent } from './bulk-case-modify.component';

describe('BulkCaseModifyComponent', () => {
  let component: BulkCaseModifyComponent;
  let fixture: ComponentFixture<BulkCaseModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkCaseModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkCaseModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
