import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainReplacementComponent } from './main-replacement.component';

describe('MainReplacementComponent', () => {
  let component: MainReplacementComponent;
  let fixture: ComponentFixture<MainReplacementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainReplacementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainReplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
