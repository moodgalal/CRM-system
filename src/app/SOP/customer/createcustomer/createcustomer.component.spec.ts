import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecustomerComponent } from './createcustomer.component';

describe('CreatecustomerComponent', () => {
  let component: CreatecustomerComponent;
  let fixture: ComponentFixture<CreatecustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatecustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
