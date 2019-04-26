import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkActionEntryComponent } from './bulk-action-entry.component';

describe('BulkActionEntryComponent', () => {
  let component: BulkActionEntryComponent;
  let fixture: ComponentFixture<BulkActionEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkActionEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkActionEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
