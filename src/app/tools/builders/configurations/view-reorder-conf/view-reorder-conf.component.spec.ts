import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReorderConfComponent } from './view-reorder-conf.component';

describe('ViewReorderConfComponent', () => {
  let component: ViewReorderConfComponent;
  let fixture: ComponentFixture<ViewReorderConfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewReorderConfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReorderConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
