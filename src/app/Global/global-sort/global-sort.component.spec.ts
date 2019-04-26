import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSortComponent } from './global-sort.component';

describe('GlobalSortComponent', () => {
  let component: GlobalSortComponent;
  let fixture: ComponentFixture<GlobalSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
