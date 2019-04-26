import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLetterFormComponent } from './create-letter-form.component';

describe('CreateLetterFormComponent', () => {
  let component: CreateLetterFormComponent;
  let fixture: ComponentFixture<CreateLetterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLetterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLetterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
