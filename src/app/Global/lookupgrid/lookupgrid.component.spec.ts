import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupgridComponent } from './lookupgrid.component';

describe('LookupgridComponent', () => {
  let component: LookupgridComponent;
  let fixture: ComponentFixture<LookupgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookupgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
