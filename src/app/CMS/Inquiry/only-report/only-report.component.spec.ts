import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyReportComponent } from './only-report.component';

describe('OnlyReportComponent', () => {
  let component: OnlyReportComponent;
  let fixture: ComponentFixture<OnlyReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlyReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
