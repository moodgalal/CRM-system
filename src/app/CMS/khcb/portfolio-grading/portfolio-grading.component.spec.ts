import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioGradingComponent } from './portfolio-grading.component';

describe('PortfolioGradingComponent', () => {
  let component: PortfolioGradingComponent;
  let fixture: ComponentFixture<PortfolioGradingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioGradingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioGradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
