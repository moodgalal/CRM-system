import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatelookup02Component } from './updatelookup02.component';

describe('Updatelookup02Component', () => {
  let component: Updatelookup02Component;
  let fixture: ComponentFixture<Updatelookup02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Updatelookup02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Updatelookup02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
