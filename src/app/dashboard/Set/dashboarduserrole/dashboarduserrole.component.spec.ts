import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarduserroleComponent } from './dashboarduserrole.component';

describe('DashboarduserroleComponent', () => {
  let component: DashboarduserroleComponent;
  let fixture: ComponentFixture<DashboarduserroleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboarduserroleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboarduserroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
