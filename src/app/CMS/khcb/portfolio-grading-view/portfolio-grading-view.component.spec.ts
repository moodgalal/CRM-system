import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioGradingViewComponent } from './portfolio-grading-view.component';

describe('PortfolioGradingViewComponent', () => {
  let component: PortfolioGradingViewComponent;
  let fixture: ComponentFixture<PortfolioGradingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioGradingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioGradingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
