import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatelookup01Component } from './updatelookup01.component';

describe('Updatelookup01Component', () => {
  let component: Updatelookup01Component;
  let fixture: ComponentFixture<Updatelookup01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Updatelookup01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Updatelookup01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
