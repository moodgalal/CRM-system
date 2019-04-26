import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cm00039Component } from './cm00039.component';

describe('Cm00039Component', () => {
  let component: Cm00039Component;
  let fixture: ComponentFixture<Cm00039Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cm00039Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cm00039Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
