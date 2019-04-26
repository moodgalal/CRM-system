import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLetterTypeComponent } from './update-letter-type.component';

describe('UpdateLetterTypeComponent', () => {
  let component: UpdateLetterTypeComponent;
  let fixture: ComponentFixture<UpdateLetterTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLetterTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLetterTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
