import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalOrderComponent } from './global-order.component';

describe('GlobalOrderComponent', () => {
  let component: GlobalOrderComponent;
  let fixture: ComponentFixture<GlobalOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
