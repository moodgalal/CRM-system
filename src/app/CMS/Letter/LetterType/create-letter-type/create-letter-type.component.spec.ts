import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLetterTypeComponent } from './create-letter-type.component';

describe('CreateLetterTypeComponent', () => {
  let component: CreateLetterTypeComponent;
  let fixture: ComponentFixture<CreateLetterTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLetterTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLetterTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
