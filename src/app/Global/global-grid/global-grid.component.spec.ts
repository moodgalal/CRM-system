import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalGridComponent } from './global-grid.component';

describe('GlobalGridComponent', () => {
  let component: GlobalGridComponent;
  let fixture: ComponentFixture<GlobalGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
