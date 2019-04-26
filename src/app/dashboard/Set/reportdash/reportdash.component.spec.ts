import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportdashComponent } from './reportdash.component';

describe('ReportdashComponent', () => {
  let component: ReportdashComponent;
  let fixture: ComponentFixture<ReportdashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportdashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
