import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentbystatsclntComponent } from './agentbystatsclnt.component';

describe('AgentbystatsclntComponent', () => {
  let component: AgentbystatsclntComponent;
  let fixture: ComponentFixture<AgentbystatsclntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentbystatsclntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentbystatsclntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
