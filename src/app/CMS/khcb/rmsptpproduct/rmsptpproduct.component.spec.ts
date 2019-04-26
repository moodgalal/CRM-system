import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmsptpproductComponent } from './rmsptpproduct.component';

describe('RmsptpproductComponent', () => {
  let component: RmsptpproductComponent;
  let fixture: ComponentFixture<RmsptpproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmsptpproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmsptpproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
