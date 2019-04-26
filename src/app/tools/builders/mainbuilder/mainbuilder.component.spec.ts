import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainbuilderComponent } from './mainbuilder.component';

describe('MainbuilderComponent', () => {
  let component: MainbuilderComponent;
  let fixture: ComponentFixture<MainbuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainbuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
