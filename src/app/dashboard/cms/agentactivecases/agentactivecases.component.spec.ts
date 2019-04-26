import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentactivecasesComponent } from './agentactivecases.component';

describe('AgentactivecasesComponent', () => {
  let component: AgentactivecasesComponent;
  let fixture: ComponentFixture<AgentactivecasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentactivecasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentactivecasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
