import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLetterTypeComponent } from './main-letter-type.component';

describe('MainLetterTypeComponent', () => {
  let component: MainLetterTypeComponent;
  let fixture: ComponentFixture<MainLetterTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLetterTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLetterTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
