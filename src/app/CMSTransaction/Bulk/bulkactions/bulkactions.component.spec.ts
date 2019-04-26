import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkactionsComponent } from './bulkactions.component';

describe('BulkactionsComponent', () => {
  let component: BulkactionsComponent;
  let fixture: ComponentFixture<BulkactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
