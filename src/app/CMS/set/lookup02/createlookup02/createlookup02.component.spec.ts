import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Createlookup02Component } from './createlookup02.component';

describe('Createlookup02Component', () => {
  let component: Createlookup02Component;
  let fixture: ComponentFixture<Createlookup02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Createlookup02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Createlookup02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
