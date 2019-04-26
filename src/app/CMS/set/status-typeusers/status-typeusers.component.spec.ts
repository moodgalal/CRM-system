import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusTypeusersComponent } from './status-typeusers.component';

describe('StatusTypeusersComponent', () => {
  let component: StatusTypeusersComponent;
  let fixture: ComponentFixture<StatusTypeusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusTypeusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusTypeusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
