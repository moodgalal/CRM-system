import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmsptpagentComponent } from './rmsptpagent.component';

describe('RmsptpagentComponent', () => {
  let component: RmsptpagentComponent;
  let fixture: ComponentFixture<RmsptpagentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmsptpagentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmsptpagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
