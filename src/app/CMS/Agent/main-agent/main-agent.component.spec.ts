import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAgentComponent } from './main-agent.component';

describe('MainAgentComponent', () => {
  let component: MainAgentComponent;
  let fixture: ComponentFixture<MainAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
