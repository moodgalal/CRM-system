import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasedeleteComponent } from './casedelete.component';

describe('CasedeleteComponent', () => {
  let component: CasedeleteComponent;
  let fixture: ComponentFixture<CasedeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasedeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasedeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
