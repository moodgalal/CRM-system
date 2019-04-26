import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsortComponent } from './viewsort.component';

describe('ViewsortComponent', () => {
  let component: ViewsortComponent;
  let fixture: ComponentFixture<ViewsortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
