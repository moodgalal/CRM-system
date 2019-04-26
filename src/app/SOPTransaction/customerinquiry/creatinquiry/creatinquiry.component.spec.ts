import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatinquiryComponent } from './creatinquiry.component';

describe('CreatinquiryComponent', () => {
  let component: CreatinquiryComponent;
  let fixture: ComponentFixture<CreatinquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatinquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatinquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
