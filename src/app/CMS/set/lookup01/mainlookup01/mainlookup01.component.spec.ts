import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainlookup01Component } from './mainlookup01.component';

describe('Mainlookup01Component', () => {
  let component: Mainlookup01Component;
  let fixture: ComponentFixture<Mainlookup01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mainlookup01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mainlookup01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
