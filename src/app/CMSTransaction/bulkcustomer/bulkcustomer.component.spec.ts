import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkcustomerComponent } from './bulkcustomer.component';

describe('BulkcustomerComponent', () => {
  let component: BulkcustomerComponent;
  let fixture: ComponentFixture<BulkcustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkcustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
