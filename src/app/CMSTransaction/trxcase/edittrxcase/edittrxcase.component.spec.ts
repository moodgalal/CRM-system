import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetrxcaseComponent } from './createtrxcase.component';

describe('CreatetrxcaseComponent', () => {
  let component: CreatetrxcaseComponent;
  let fixture: ComponentFixture<CreatetrxcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatetrxcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetrxcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
