import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioGradingmonthViewComponent } from './portfolio-gradingmonth-view.component';

describe('PortfolioGradingmonthViewComponent', () => {
  let component: PortfolioGradingmonthViewComponent;
  let fixture: ComponentFixture<PortfolioGradingmonthViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioGradingmonthViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioGradingmonthViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
