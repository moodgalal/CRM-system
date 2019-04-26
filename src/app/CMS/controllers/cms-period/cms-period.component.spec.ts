import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsPeriodComponent } from './cms-period.component';

describe('CmsPeriodComponent', () => {
  let component: CmsPeriodComponent;
  let fixture: ComponentFixture<CmsPeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmsPeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
