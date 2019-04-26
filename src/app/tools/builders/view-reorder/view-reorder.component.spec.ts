import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReorderComponent } from './view-reorder.component';

describe('ViewReorderComponent', () => {
  let component: ViewReorderComponent;
  let fixture: ComponentFixture<ViewReorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewReorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
