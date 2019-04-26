import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmsptpcollectstageComponent } from './rmsptpcollectstage.component';

describe('RmsptpcollectstageComponent', () => {
  let component: RmsptpcollectstageComponent;
  let fixture: ComponentFixture<RmsptpcollectstageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmsptpcollectstageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmsptpcollectstageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
