import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAdjustmentComponent } from './main-adjustment.component';

describe('MainAdjustmentComponent', () => {
  let component: MainAdjustmentComponent;
  let fixture: ComponentFixture<MainAdjustmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAdjustmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAdjustmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
