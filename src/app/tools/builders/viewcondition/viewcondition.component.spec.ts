import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewconditionComponent } from './viewcondition.component';

describe('ViewconditionComponent', () => {
  let component: ViewconditionComponent;
  let fixture: ComponentFixture<ViewconditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewconditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewconditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
