import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLetterComponent } from './update-letter.component';

describe('UpdateLetterComponent', () => {
  let component: UpdateLetterComponent;
  let fixture: ComponentFixture<UpdateLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
