import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioGradingmonthComponent } from './portfolio-gradingmonth.component';

describe('PortfolioGradingmonthComponent', () => {
  let component: PortfolioGradingmonthComponent;
  let fixture: ComponentFixture<PortfolioGradingmonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioGradingmonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioGradingmonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
