import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLetterFormComponent } from './main-letter-form.component';

describe('MainLetterFormComponent', () => {
  let component: MainLetterFormComponent;
  let fixture: ComponentFixture<MainLetterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLetterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLetterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
