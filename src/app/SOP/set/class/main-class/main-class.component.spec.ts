import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainClassComponent } from './main-class.component';

describe('MainClassComponent', () => {
  let component: MainClassComponent;
  let fixture: ComponentFixture<MainClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
