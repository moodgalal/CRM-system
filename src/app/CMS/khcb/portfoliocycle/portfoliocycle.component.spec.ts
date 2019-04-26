import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliocycleComponent } from './portfoliocycle.component';

describe('PortfoliocycleComponent', () => {
  let component: PortfoliocycleComponent;
  let fixture: ComponentFixture<PortfoliocycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfoliocycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliocycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
