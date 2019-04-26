import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CycletraceComponent } from './cycletrace.component';

describe('CycletraceComponent', () => {
  let component: CycletraceComponent;
  let fixture: ComponentFixture<CycletraceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CycletraceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CycletraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
