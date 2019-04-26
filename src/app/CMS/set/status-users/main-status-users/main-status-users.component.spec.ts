import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStatusUsersComponent } from './main-status-users.component';

describe('MainStatusUsersComponent', () => {
  let component: MainStatusUsersComponent;
  let fixture: ComponentFixture<MainStatusUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainStatusUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainStatusUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
