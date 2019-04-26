import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportuserroleComponent } from './reportuserrole.component';

describe('ReportuserroleComponent', () => {
  let component: ReportuserroleComponent;
  let fixture: ComponentFixture<ReportuserroleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportuserroleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportuserroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
