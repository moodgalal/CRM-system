import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentbyclientComponent } from './agentbyclient.component';

describe('AgentbyclientComponent', () => {
  let component: AgentbyclientComponent;
  let fixture: ComponentFixture<AgentbyclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentbyclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentbyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
