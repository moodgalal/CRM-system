import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaininquiryComponent } from './maininquiry.component';

describe('MaininquiryComponent', () => {
  let component: MaininquiryComponent;
  let fixture: ComponentFixture<MaininquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaininquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaininquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
