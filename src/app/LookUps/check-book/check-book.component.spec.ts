import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBookComponent } from './check-book.component';

describe('CheckBookComponent', () => {
  let component: CheckBookComponent;
  let fixture: ComponentFixture<CheckBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
