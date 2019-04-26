import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStatusComponent } from './main-status.component';

describe('MainStatusComponent', () => {
  let component: MainStatusComponent;
  let fixture: ComponentFixture<MainStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
