import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashrolesComponent } from './dashroles.component';

describe('DashrolesComponent', () => {
  let component: DashrolesComponent;
  let fixture: ComponentFixture<DashrolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashrolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashrolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
