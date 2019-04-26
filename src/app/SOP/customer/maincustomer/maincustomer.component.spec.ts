import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincustomerComponent } from './maincustomer.component';

describe('MaincustomerComponent', () => {
  let component: MaincustomerComponent;
  let fixture: ComponentFixture<MaincustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaincustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaincustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
