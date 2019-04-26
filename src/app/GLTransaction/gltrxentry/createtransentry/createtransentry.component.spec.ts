import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetransentryComponent } from './createtransentry.component';

describe('CreatetransentryComponent', () => {
  let component: CreatetransentryComponent;
  let fixture: ComponentFixture<CreatetransentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatetransentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetransentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
