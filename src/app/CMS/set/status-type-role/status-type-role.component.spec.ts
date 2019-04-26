import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusTypeRoleComponent } from './status-type-role.component';

describe('StatusTypeRoleComponent', () => {
  let component: StatusTypeRoleComponent;
  let fixture: ComponentFixture<StatusTypeRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusTypeRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusTypeRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
