import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLetterFormComponent } from './update-letter-form.component';

describe('UpdateLetterFormComponent', () => {
  let component: UpdateLetterFormComponent;
  let fixture: ComponentFixture<UpdateLetterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLetterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLetterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
