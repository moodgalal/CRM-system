import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSessionComponent } from './main-session.component';

describe('MainSessionComponent', () => {
  let component: MainSessionComponent;
  let fixture: ComponentFixture<MainSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
