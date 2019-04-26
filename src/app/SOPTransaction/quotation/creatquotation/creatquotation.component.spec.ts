import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatquotationComponent } from './creatquotation.component';

describe('CreatquotationComponent', () => {
  let component: CreatquotationComponent;
  let fixture: ComponentFixture<CreatquotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatquotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatquotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
