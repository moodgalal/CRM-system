import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStatusRoleComponent } from './main-status-role.component';

describe('MainStatusRoleComponent', () => {
  let component: MainStatusRoleComponent;
  let fixture: ComponentFixture<MainStatusRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainStatusRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainStatusRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
