import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentcasesComponent } from './agentcases.component';

describe('AgentcasesComponent', () => {
  let component: AgentcasesComponent;
  let fixture: ComponentFixture<AgentcasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentcasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
