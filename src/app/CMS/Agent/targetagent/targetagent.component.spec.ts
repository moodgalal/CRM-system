import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetagentComponent } from './targetagent.component';

describe('TargetagentComponent', () => {
  let component: TargetagentComponent;
  let fixture: ComponentFixture<TargetagentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetagentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
