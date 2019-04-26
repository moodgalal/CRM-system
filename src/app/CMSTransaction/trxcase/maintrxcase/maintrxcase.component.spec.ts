import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintrxcaseComponent } from './maintrxcase.component';

describe('MaintrxcaseComponent', () => {
  let component: MaintrxcaseComponent;
  let fixture: ComponentFixture<MaintrxcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintrxcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintrxcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
