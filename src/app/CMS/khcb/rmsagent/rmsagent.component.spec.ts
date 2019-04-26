import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmsagentComponent } from './rmsagent.component';

describe('RmsagentComponent', () => {
  let component: RmsagentComponent;
  let fixture: ComponentFixture<RmsagentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmsagentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmsagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
