import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallsdashComponent } from './callsdash.component';

describe('CallsdashComponent', () => {
  let component: CallsdashComponent;
  let fixture: ComponentFixture<CallsdashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallsdashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallsdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
