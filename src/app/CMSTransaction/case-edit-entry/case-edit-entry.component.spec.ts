import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseEditEntryComponent } from './case-edit-entry.component';

describe('CaseEditEntryComponent', () => {
  let component: CaseEditEntryComponent;
  let fixture: ComponentFixture<CaseEditEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseEditEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseEditEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
