import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlygridComponent } from './onlygrid.component';

describe('OnlygridComponent', () => {
  let component: OnlygridComponent;
  let fixture: ComponentFixture<OnlygridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlygridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlygridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
