import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentUserComponent } from './agent-user.component';

describe('AgentUserComponent', () => {
  let component: AgentUserComponent;
  let fixture: ComponentFixture<AgentUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
