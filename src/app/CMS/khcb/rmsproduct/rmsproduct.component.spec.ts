import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmsproductComponent } from './rmsproduct.component';

describe('RmsproductComponent', () => {
  let component: RmsproductComponent;
  let fixture: ComponentFixture<RmsproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmsproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmsproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
