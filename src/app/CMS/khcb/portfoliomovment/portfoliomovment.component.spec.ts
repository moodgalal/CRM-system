import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliomovmentComponent } from './portfoliomovment.component';

describe('PortfoliomovmentComponent', () => {
  let component: PortfoliomovmentComponent;
  let fixture: ComponentFixture<PortfoliomovmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfoliomovmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliomovmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
