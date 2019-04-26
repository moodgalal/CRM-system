import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLetterComponent } from './view-letter.component';

describe('ViewLetterComponent', () => {
  let component: ViewLetterComponent;
  let fixture: ComponentFixture<ViewLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
