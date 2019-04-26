import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoActionsComponent } from './do-actions.component';

describe('DoActionsComponent', () => {
  let component: DoActionsComponent;
  let fixture: ComponentFixture<DoActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
