import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentbystatusComponent } from './agentbystatus.component';

describe('AgentbystatusComponent', () => {
  let component: AgentbystatusComponent;
  let fixture: ComponentFixture<AgentbystatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentbystatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentbystatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
