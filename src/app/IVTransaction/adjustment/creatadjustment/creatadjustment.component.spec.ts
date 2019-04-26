import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatadjustmentComponent } from './creatadjustment.component';

describe('CreatadjustmentComponent', () => {
  let component: CreatadjustmentComponent;
  let fixture: ComponentFixture<CreatadjustmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatadjustmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatadjustmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
