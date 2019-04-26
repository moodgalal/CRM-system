import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReplacementComponent } from './create-replacement.component';

describe('CreateReplacementComponent', () => {
  let component: CreateReplacementComponent;
  let fixture: ComponentFixture<CreateReplacementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateReplacementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
