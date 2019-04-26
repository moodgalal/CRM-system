import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportrolesComponent } from './reportroles.component';

describe('ReportrolesComponent', () => {
  let component: ReportrolesComponent;
  let fixture: ComponentFixture<ReportrolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportrolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportrolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
