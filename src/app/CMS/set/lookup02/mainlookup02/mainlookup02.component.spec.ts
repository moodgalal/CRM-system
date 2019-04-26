import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainlookup02Component } from './mainlookup02.component';

describe('Mainlookup02Component', () => {
  let component: Mainlookup02Component;
  let fixture: ComponentFixture<Mainlookup02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mainlookup02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mainlookup02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
