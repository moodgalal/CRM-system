import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StafftargetreportComponent } from './stafftargetreport.component';

describe('StafftargetreportComponent', () => {
  let component: StafftargetreportComponent;
  let fixture: ComponentFixture<StafftargetreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StafftargetreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StafftargetreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
