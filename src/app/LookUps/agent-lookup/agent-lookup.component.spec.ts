import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentLookupComponent } from './agent-lookup.component';

describe('AgentLookupComponent', () => {
  let component: AgentLookupComponent;
  let fixture: ComponentFixture<AgentLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
