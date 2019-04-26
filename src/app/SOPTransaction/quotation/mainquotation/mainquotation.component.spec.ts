import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainquotationComponent } from './mainquotation.component';

describe('MainquotationComponent', () => {
  let component: MainquotationComponent;
  let fixture: ComponentFixture<MainquotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainquotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainquotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
