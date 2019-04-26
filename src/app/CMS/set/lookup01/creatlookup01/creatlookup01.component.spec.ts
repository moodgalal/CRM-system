import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Creatlookup01Component } from './creatlookup01.component';

describe('Creatlookup01Component', () => {
  let component: Creatlookup01Component;
  let fixture: ComponentFixture<Creatlookup01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Creatlookup01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Creatlookup01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
