import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrouprecieverComponent } from './groupreciever.component';

describe('GrouprecieverComponent', () => {
  let component: GrouprecieverComponent;
  let fixture: ComponentFixture<GrouprecieverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrouprecieverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrouprecieverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
