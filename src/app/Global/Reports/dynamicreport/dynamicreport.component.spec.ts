import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicreportComponent } from './dynamicreport.component';

describe('DynamicreportComponent', () => {
  let component: DynamicreportComponent;
  let fixture: ComponentFixture<DynamicreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
